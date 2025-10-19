export type Gender = 'M' | 'F' | 'MM' | 'MF' | 'FF';

export function genderedAuthor(gender: Gender, capitalize: boolean = true): string {
  switch (gender) {
    case 'M':
      return capitalize === true ? 'Autor' : 'autor';
    case 'F':
      return capitalize === true ? 'Autorka' : 'autorka';
    case 'MM':
      return capitalize === true ? 'Autori' : 'autori';
    case 'MF':
      return capitalize === true ? 'Autori' : 'autori';
    case 'FF':
      return capitalize === true ? 'Autorke' : 'autorke';
    default:
      throw new Error('Invalid gender type value');
  }
}
