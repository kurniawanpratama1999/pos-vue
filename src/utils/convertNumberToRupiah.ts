export const converNumberToRupiah = (nominal: number | string) => {
  try {
    if (Number.isNaN(nominal)) {
      throw new Error("Nominal is not a number");
    }

    const changeToNumber = Number(nominal);
    return new Intl.NumberFormat("id-ID").format(changeToNumber);
  } catch (error) {
    console.error(error);
  }
};
