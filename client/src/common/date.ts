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

const getFormattedTime = (fourDigitTime: string): string => {
  var hours24 = parseInt(fourDigitTime.substring(0, 2));
  var hours = ((hours24 + 11) % 12) + 1;
  var amPm = hours24 > 11 ? "PM" : "AM";
  var minutes = fourDigitTime.substring(2);

  return `${hours}:${minutes} ${amPm}`;
};

export const formatTime = (time: string): string => {
  let timeArray: Array<string | undefined> = time.split(":");
  timeArray.splice(2, 1);
  return getFormattedTime(timeArray.join(""));
};
