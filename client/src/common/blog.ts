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

export interface Blog {
  banner: Array<Banner>;
  content: string;
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export const differenceDate = (date: string) => {
  const date1 = new Date();
  const date2 = new Date(date);

  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return `${Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24))} days ago`;
};

export const formatDate = (date: string) => {
  let dateObject = new Date(date);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(dateObject);

  return `${month} ${day}, ${year}`;
};
