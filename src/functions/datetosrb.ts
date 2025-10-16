/*
 * Convert date to Serbian text (by default the current date is used if no date is passed to the function)
 */
export function dateToSRB(date?: Date | string | number): string {
  const d = new Date(date ?? Date.now());

  const year = d.getFullYear();
  const month = d.getMonth() + 1; // Months are 0-indexed
  const day = d.getDate();

  const monthString = monthToSRB(month);

  return `${day}. ${monthString} ${year}. godine`;
}

function monthToSRB(month: number): string {
  switch (month) {
    case 1:
      return 'januara';
    case 2:
      return 'februara';
    case 3:
      return 'marta';
    case 4:
      return 'aprila';
    case 5:
      return 'maja';
    case 6:
      return 'juna';
    case 7:
      return 'jula';
    case 8:
      return 'avgusta';
    case 9:
      return 'septembra';
    case 10:
      return 'oktobra';
    case 11:
      return 'novembra';
    case 12:
      return 'decembra';
    default:
      throw new Error('Month must be in range [1, 12]');
  }
}
