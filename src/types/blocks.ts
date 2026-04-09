// Message Block Types - Inspired by Rocket.Chat UI Kit
// Base block interface
export interface BaseMessageBlock {
  type: MessageBlockType;
  id?: string;
}

// Text Block
export interface TextBlock extends BaseMessageBlock {
  type: "text";
  content: string;
  style?: "normal" | "bold" | "italic" | "code" | "strikethrough";
}

// Section Block
export interface SectionBlock extends BaseMessageBlock {
  type: "section";
  text?: TextBlock;
  fields?: TextBlock[];
  accessory?: ButtonBlock | ImageBlock | SelectBlock;
}

// Actions Block
export interface ActionsBlock extends BaseMessageBlock {
  type: "actions";
  elements: (ButtonBlock | SelectBlock | DatePickerBlock)[];
}

// Context Block
export interface ContextBlock extends BaseMessageBlock {
  type: "context";
  elements: (TextBlock | ImageBlock)[];
}

// Divider Block
export interface DividerBlock extends BaseMessageBlock {
  type: "divider";
}

// Image Block
export interface ImageBlock extends BaseMessageBlock {
  type: "image";
  imageUrl: string;
  altText?: string;
  title?: TextBlock;
}

// Video Block
export interface VideoBlock extends BaseMessageBlock {
  type: "video";
  videoUrl: string;
  title?: string;
  thumbnailUrl?: string;
}

// File Block
export interface FileBlock extends BaseMessageBlock {
  type: "file";
  fileUrl: string;
  fileName: string;
  fileSize?: number;
  fileType?: string;
}

// Quote Block
export interface QuoteBlock extends BaseMessageBlock {
  type: "quote";
  text: string;
  author?: string;
  timestamp?: string;
}

// Code Block
export interface CodeBlock extends BaseMessageBlock {
  type: "code";
  code: string;
  language?: string;
}

// Link Preview Block
export interface LinkPreviewBlock extends BaseMessageBlock {
  type: "link_preview";
  url: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  siteName?: string;
}

// Interactive Elements
export interface ButtonBlock extends BaseMessageBlock {
  type: "button";
  text: string;
  value?: string;
  style?: "primary" | "secondary" | "danger";
  url?: string;
  actionType?: string;
  metadata?: Record<string, any>;
}

export interface SelectBlock extends BaseMessageBlock {
  type: "select";
  placeholder: string;
  options: SelectOption[];
  initialOption?: SelectOption;
}

export interface SelectOption {
  text: string;
  value: string;
}

export interface DatePickerBlock extends BaseMessageBlock {
  type: "date_picker";
  placeholder: string;
  initialDate?: string;
}

// Message with blocks
export interface MessageWithBlocks {
  _id: string;
  rid: string;
  msg: string;
  ts: string;
  u: {
    _id: string;
    username: string;
    name?: string;
  };
  blocks?: MessageBlock[];
  attachments?: any[];
  editedAt?: string;
  editedBy?: {
    _id: string;
    username: string;
  };
}

// Message Block Types - Inspired by Rocket.Chat UI Kit
export type MessageBlockType =
  | "text"
  | "section"
  | "actions"
  | "context"
  | "divider"
  | "image"
  | "video"
  | "file"
  | "quote"
  | "code"
  | "link_preview"
  | "button"
  | "select"
  | "date_picker";

// Base block interface
export interface BaseMessageBlock {
  type: MessageBlockType;
  id?: string;
  actionId?: string;
}

// Text Block
export interface TextBlock extends BaseMessageBlock {
  type: "text";
  content: string;
  style?: "normal" | "bold" | "italic" | "code" | "strikethrough";
}

// Section Block
export interface SectionBlock extends BaseMessageBlock {
  type: "section";
  text?: TextBlock;
  fields?: TextBlock[];
  accessory?: ButtonBlock | ImageBlock | SelectBlock;
}

// Actions Block
export interface ActionsBlock extends BaseMessageBlock {
  type: "actions";
  elements: (ButtonBlock | SelectBlock | DatePickerBlock)[];
}

// Context Block
export interface ContextBlock extends BaseMessageBlock {
  type: "context";
  elements: (TextBlock | ImageBlock)[];
}

// Divider Block
export interface DividerBlock extends BaseMessageBlock {
  type: "divider";
}

// Image Block
export interface ImageBlock extends BaseMessageBlock {
  type: "image";
  imageUrl: string;
  altText?: string;
  title?: TextBlock;
}

// Video Block
export interface VideoBlock extends BaseMessageBlock {
  type: "video";
  videoUrl: string;
  title?: string;
  thumbnailUrl?: string;
}

// File Block
export interface FileBlock extends BaseMessageBlock {
  type: "file";
  fileUrl: string;
  fileName: string;
  fileSize?: number;
  fileType?: string;
}

// Quote Block
export interface QuoteBlock extends BaseMessageBlock {
  type: "quote";
  text: string;
  author?: string;
  timestamp?: string;
}

// Code Block
export interface CodeBlock extends BaseMessageBlock {
  type: "code";
  code: string;
  language?: string;
}

// Link Preview Block
export interface LinkPreviewBlock extends BaseMessageBlock {
  type: "link_preview";
  url: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  siteName?: string;
}

// Interactive Elements
export interface ButtonBlock extends BaseMessageBlock {
  type: "button";
  text: string;
  value?: string;
  style?: "primary" | "secondary" | "danger";
  url?: string;
  actionType?: string;
  metadata?: Record<string, any>;
}

export interface SelectBlock extends BaseMessageBlock {
  type: "select";
  placeholder: string;
  options: SelectOption[];
  initialOption?: SelectOption;
}

export interface SelectOption {
  text: string;
  value: string;
}

export interface DatePickerBlock extends BaseMessageBlock {
  type: "date_picker";
  placeholder: string;
  initialDate?: string;
}

// Union type for all blocks
export type MessageBlock =
  | TextBlock
  | SectionBlock
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | VideoBlock
  | FileBlock
  | QuoteBlock
  | CodeBlock
  | LinkPreviewBlock
  | ButtonBlock
  | SelectBlock
  | DatePickerBlock;

// Message with blocks
export interface MessageWithBlocks {
  _id: string;
  rid: string;
  msg: string;
  ts: string;
  u: {
    _id: string;
    username: string;
    name?: string;
  };
  blocks?: MessageBlock[];
  attachments?: any[];
  editedAt?: string;
  editedBy?: {
    _id: string;
    username: string;
  };
}
