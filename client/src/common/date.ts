export const differenceDate = (date: string) => {
  const date1 = new Date();
  const date2 = new Date(date);

  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
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
