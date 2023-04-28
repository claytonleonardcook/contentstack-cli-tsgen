import {Command} from '@contentstack/cli-command'
import {flags} from '@contentstack/cli-utilities'
import {getGlobalFields} from '../lib/stack/client'
import {ContentType} from '../lib/stack/schema'
import tsgenRunner from '../lib/tsgen/runner'
import {Stack as stack} from 'contentstack'

export default class TypeScriptCodeGeneratorCommand extends Command {
  static description = 'generate TypeScript typings from a Stack';

  static examples = [
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts"',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" -p "I"',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --no-doc',
  ];

  static flags: any = {
    deliveryToken: flags.string({
      char: 't',
      description: 'delivery token',
      hidden: false,
      multiple: false,
      required: true,
    }),

    apiKey: flags.string({
      char: 'a',
      description: 'api key',
      hidden: false,
      multiple: false,
      required: true,
    }),

    environment: flags.string({
      char: 'e',
      description: 'environment',
      hidden: false,
      multiple: false,
      required: true,
    }),

    branch: flags.string({
      char: 'b',
      description: 'branch',
      hidden: false,
      multiple: false,
      required: true,
    }),

    output: flags.string({
      char: 'o',
      description: 'full path to output',
      hidden: false,
      multiple: false,
      required: true,
    }),

    prefix: flags.string({
      char: 'p',
      description: 'interface prefix, e.g. "I"',
      hidden: false,
      multiple: false,
      default: '',
      required: false,
    }),

    doc: flags.boolean({
      char: 'd',
      description: 'include documentation comments',
      default: true,
      allowNo: true,
    }),
  };

  async run() {
    try {
      const {flags} = await this.parse(TypeScriptCodeGeneratorCommand)
      const {
        deliveryToken,
        apiKey,
        environment,
        branch,
        output,
        prefix,
        doc,
      } = flags

      // if (token.type !== "delivery") {
      //   this.warn(
      //     "Possibly using a management token. You may not be able to connect to your Stack. Please use a delivery token."
      //   );
      // }

      if (!output || !output.trim()) {
        this.error('Please provide an output path.', {exit: 2})
      }

      const [client, globalFields] = await Promise.all([
        stack({
          api_key: apiKey,
          delivery_token: deliveryToken,
          environment: environment,
          branch: branch,
        }),
        getGlobalFields({
          apiKey: apiKey,
          token: deliveryToken,
          environment: environment,
          region: 'us',
          branch: branch,
        }),
      ])

      const contentTypes = await client.getContentTypes({
        include_global_field_schema: true,
      })

      if (contentTypes) {
        const schemas: ContentType[] = [
          ...globalFields.global_fields.map(globalField => ({
            ...globalField,
            schema_type: 'global_field',
          })),
          ...contentTypes.content_types,
        ]
        const {definitions, outputPath} = await tsgenRunner(
          output,
          schemas,
          prefix,
          doc
        )
        this.log(`Wrote ${definitions} Content Types to '${outputPath}'.`)
      } else {
        this.log('No Content Types exist in the Stack.')
      }
    } catch (error) {
      this.error(error as any, {exit: 1})
    }
  }
}
