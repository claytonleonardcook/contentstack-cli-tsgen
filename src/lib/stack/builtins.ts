// File and Link fields are additional, non-scalar, data types within a stack.
export const defaultInterfaces = (prefix = '') => [
  `export interface ${prefix}File { 
        uid: string;
        created_at: string;
        updated_at: string;
        created_by: string;
        updated_by: string;
        content_type: string;
        file_size: string;
        tags: string[];
        filename: string;
        url: string;
        ACL: any[];
        is_dir: boolean;
        parent_uid: string;
        _version: number;
        title: string;
        publish_details: {
            environment: string;
            locale: string;
            time: string;
            user: string;
        };
    }`,
  `export interface ${prefix}Link { 
        title: string;
        href: string;
    }`,
  `export type TypePublishDetails = {
        environment: string;
        locale: string;
        time: Date;
        user: string;
      }`,
//   `export type TypeResolvedEntry = {
//         uid: string;
//         ACL?: object;
//         _content_type_uid?: string;
//         created_at?: string;
//         created_by?: string;
//         _version?: number;
//         locale?: 'en-us' | string;
//         _in_progress?: boolean;
//         tags?: Array<any>;
//         publish_details?: TypePublishDetails;
//         updated_at?: string;
//         updated_by?: string;
//       }`,
]
