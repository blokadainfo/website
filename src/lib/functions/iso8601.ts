/*
 * Convert date to ISO8601 formatted string (by default the current date is used if no date is passed to the function)
 */
export function dateToISO8601(date?: Date | string | number): string {
	const d = new Date(date ?? Date.now());

	const year = d.getFullYear();
	const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
	const day = d.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
}
