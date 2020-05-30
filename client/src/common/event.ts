interface Banner {
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

export interface Event {
  banner: Array<Banner>;
  content: string;
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  date: string;
  time: string;
  address: string;
  __v: number;
  _id: string;
}
