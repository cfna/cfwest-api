export function convertTimestamp(timestamp?: string): Date | undefined {
  if (!timestamp) {
    return undefined;
  }

  // tslint:disable-next-line:radix
  const time = parseInt(timestamp);
  return new Date(time);
}

export function convertDateToString(date?: Date): string | undefined {
  if (!date) {
    return undefined;
  }

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const _date = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const fmtMin = min < 10 ? `0${min}` : min;
  const fmtSecs = sec < 10 ? `0${sec}` : sec;
  return `${_date} ${month} ${year} ${hour}:${fmtMin}:${fmtSecs}`;
}
