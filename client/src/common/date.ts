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

  return `${month} ${(parseInt(day) + 1).toString()}, ${year}`;
};

export const formatNoTimezoneLongDate = (date: string) => {
  let dateObject = new Date(`${date} CST`);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    timeZone: "America/Chicago",
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

export const getFormattedTime = (date: string): string => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes().toString();
  var hoursFinal = ((hours + 11) % 12) + 1;
  var amPm = hours > 11 ? "PM" : "AM";

  return `${hoursFinal}:${
    minutes.length < 2 ? `0${minutes}` : minutes
  } ${amPm}`;
};

export const renderDate = (date: string) => {
  let difference = differenceDate(date) * -1;
  if (difference === 1) {
    return "Posted Yesterday";
  } else if (difference === 0) {
    return "Posted Today";
  } else {
    return `${difference} days ago`;
  }
};
