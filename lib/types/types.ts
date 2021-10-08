export type Image = {
  title: string;
  description: string;
  fileName: string;
  contentType: "image/jpeg";
  width: number;
  height: number;
  size: number;
  url: string;
};

export type Button = {
  primary: boolean;
  text: string;
};
