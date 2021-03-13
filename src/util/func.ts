import { Graveyard } from "./types";

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
