import { Sort } from "../Controls/Controls";
import { Graveyard, Product, UnhandledCaseError } from "./types";

export function minYear(graveyard: Graveyard): number {
  return Math.min(
    ...graveyard.map((product) => product.dateOpen.getFullYear())
  );
}

export function maxYear(graveyard: Graveyard): number {
  return Math.max(
    ...graveyard.map((product) => product.dateClose.getFullYear())
  );
}

export function enumerateArray(start: number, end: number): Array<number> {
  let array = new Array<number>();
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

export function filterProduct(product: Product, start: number, end: number) {
  const open = product.dateOpen.getFullYear();
  const close = product.dateClose.getFullYear();
  return open <= end && close >= start;
}

export function sortProducts(sort: Sort): (a: Product, b: Product) => number {
  return (a, b) => {
    switch (sort) {
      case Sort.Alpha:
        return a.name.localeCompare(b.name);
      case Sort.Oldest:
        if (a.dateOpen < b.dateOpen) return -1;
        else if (a.dateOpen > b.dateOpen) return 1;
        return 0;
      case Sort.Newest:
        if (a.dateOpen > b.dateOpen) return -1;
        else if (a.dateOpen < b.dateOpen) return 1;
        return 0;
      case Sort.Longest: {
        const periodA = a.dateClose.getTime() - a.dateOpen.getTime();
        const periodB = b.dateClose.getTime() - b.dateOpen.getTime();
        if (periodA > periodB) return -1;
        else if (periodA < periodB) return 1;
        return 0;
      }
      case Sort.Shortest: {
        const periodA = a.dateClose.getTime() - a.dateOpen.getTime();
        const periodB = b.dateClose.getTime() - b.dateOpen.getTime();
        if (periodA < periodB) return -1;
        else if (periodA > periodB) return 1;
        return 0;
      }
      case Sort.Raw:
        return -1;
      default:
        throw new UnhandledCaseError(sort);
    }
  };
}

export function remToPixels(rem: number): number {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
