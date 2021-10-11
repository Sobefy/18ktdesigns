export type MediaHolder = {
  title: string;
  description: string;
  fileName: string;
  contentType: "image/jpeg" | "text/html";
  width: number;
  height: number;
  size: number;
  url: string;
};

export type Button = {
  primary: boolean;
  text: string;
};

export type Input = {
  label: string;
  type: "text" | "email";
  placeholder: string;
};

export type CTAHeadingSize = "small" | "medium" | "large";
