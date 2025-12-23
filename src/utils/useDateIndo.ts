export const useDateIndo = (date: Date) =>
  new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(date);
