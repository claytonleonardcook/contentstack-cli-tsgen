export interface File {
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
}

export interface Link {
  title: string;
  href: string;
}

export type TypePublishDetails = {
  environment: string;
  locale: string;
  time: Date;
  user: string;
};

export interface GlobalFieldHeaderTags {
  /** Header Tag */
  field_header_tag?: 'none' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface GlobalFieldHeaderStyles {
  /** Header Style */
  field_header_style?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'eyebrow';
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface GlobalFieldColors {
  /** Color */
  field_color?:
    | 'none'
    | 'platinum_blue'
    | 'caribbean_green'
    | 'dynamic_red'
    | 'sky_blue'
    | 'night_blue'
    | 'hunter_green'
    | 'web_black'
    | 'extra_light_gray'
    | 'light_gray'
    | 'medium_gray'
    | 'dark_gray'
    | 'white';
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface GlobalFieldTextures {
  /** Textures */
  field_textures?: 'none' | 'cliff' | 'hill' | 'dune' | 'terrace';
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface GlobalFieldColumnCorners {
  /** Column Corners */
  field_column_corners?: 'squared' | 'rounded' | 'petal';
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface GlobalColumnOneCorners {
  /** Column One Corners */
  column_one_corners?: 'squared' | 'rounded' | 'petal';
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface GlobalFieldContainerWidths {
  /** Container Width */
  field_container_width?:
    | 'full_width'
    | 'full_width_gutter'
    | 'oversized'
    | 'inline'
    | 'sub_inline';
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface GlobalContainerWidths {
  /** Container Width */
  container_width?:
    | 'full_width'
    | 'full_width_gutter'
    | 'oversized'
    | 'inline'
    | 'sub_inline';
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface ImageBackground {
  /** Title */
  title: string;
  /** Image */
  field_image?: File;
  /** Focal Point X */
  focal_point_x?: number;
  /** Focal Point Y */
  focal_point_y?: number;
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface CtaLink {
  /** Title */
  title: string;
  /** Internal Link */
  field_internal_link?: PageStandard[];
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface LayoutThreeColumn {
  /** Title */
  title: string;
  /** Column One */
  field_column_one?: (TextBlock | CtaLink)[];
  /** Column Two */
  field_column_two?: (TextBlock | CtaLink)[];
  /** Column Three */
  field_column_three?: (TextBlock | CtaLink)[];
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface LayoutTwoColumn {
  /** Title */
  title: string;
  /** Column One */
  field_column_one?: (TextBlock | CtaLink)[];
  /** Column Two */
  field_column_two?: (TextBlock | CtaLink)[];
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface PageStandard {
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Page Content */
  field_page_content?: Section[];
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface Section {
  /** Title */
  title: string;
  /** Label */
  field_label?: string;
  /** Section Width */
  field_section_width?: GlobalFieldContainerWidths;
  /** Background Texture */
  field_background_texture?: GlobalFieldTextures;
  /** Background Image */
  field_background_image?: ImageBackground[];
  /** Background Color */
  field_background_color?: GlobalFieldColors;
  /** Background Variant */
  field_background_variant?:
    | 'full'
    | 'contain_top_small'
    | 'contain_top_large'
    | 'contain_bottom_small'
    | 'contain_bottom_large';
  /** Graphic Option */
  field_graphic_option?:
    | 'none'
    | 'upper_left'
    | 'lower_left'
    | 'lower_left_mono'
    | 'lower_right';
  /** Layouts */
  field_layouts?: (LayoutTwoColumn | LayoutThreeColumn | LayoutOneColumn)[];
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface LayoutOneColumn {
  /** Title */
  title: string;
  /** Column One */
  field_column_one?: (TextBlock | CtaLink)[];
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface TextBlock {
  /** Title */
  title: string;
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}

export interface Test {
  /** Title */
  title: string;
  /* Default Entry Types */
  uid: string;
  ACL?: object;
  _content_type_uid?: string;
  created_at?: string;
  created_by?: string;
  _version?: number;
  locale?: 'en-us' | string;
  _in_progress?: boolean;
  tags?: Array<any>;
  publish_details?: TypePublishDetails;
  updated_at?: string;
  updated_by?: string;
}
