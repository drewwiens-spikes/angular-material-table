import { Injectable } from '@angular/core';
import * as casual from 'casual-browserify';
import { range, chunk, mapKeys } from 'lodash';

export type Row = Record<string, string>;

const NUM_ROWS = 250;
const NUM_COLS = 22;
const WORDS = casual.array_of_words(NUM_ROWS * NUM_COLS);
const ROWS = chunk(WORDS, NUM_COLS);

@Injectable({ providedIn: 'root' })
export class StateService {
  cols = range(NUM_COLS).map(String);
  rows: Row[] = ROWS.map(r => mapKeys(r, (_v, k) => String(k)));
}
