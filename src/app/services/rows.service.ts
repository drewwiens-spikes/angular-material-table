import { Injectable } from '@angular/core';
import { range, chunk, mapKeys, random } from 'lodash';

type Value = string | number | boolean;

export type Row = Record<string, Value>;

const NUM_ROWS = 250;
const NUM_COLS = 12;
const VALUES = range(NUM_ROWS * NUM_COLS).map(() => random(1, 1000));
const ROWS = chunk(VALUES, NUM_COLS);

@Injectable({ providedIn: 'root' })
export class RowsService {
  cols = range(NUM_COLS).map(String);
  rows: Row[] = ROWS.map((r) => mapKeys(r, (_v, k) => String(k)));
}
