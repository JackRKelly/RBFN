export interface Upload {
  alternativeText: string;
  caption: string;
  createdAt: string;
  ext: string;
  formats: {
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
    thumbnail: {
      url: string;
    };
  };
  hash: string;
  height: number;
  id: string;
  mime: string;
  name: string;
  provider: string;
  related: Array<string>;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}
