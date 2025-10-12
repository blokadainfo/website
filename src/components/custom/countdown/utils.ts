import type { TimeRemaining } from './types';

export function calculateTimeRemaining(targetDate: Date): TimeRemaining {
  const totalSeconds = Math.floor((targetDate.getTime() - Date.now()) / 1000);

  const years = Math.floor(totalSeconds / (60 * 60 * 24 * 365));
  const months = Math.floor((totalSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
  const days = Math.floor((totalSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { years, months, days, hours, minutes, seconds };
}

export function pluralize(n: number, forms: [string, string, string]): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return forms[n % 100 > 4 && n % 100 < 20 ? 2 : cases[Math.min(n % 10, 5)]];
}
