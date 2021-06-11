import { Component } from '@angular/core';
import * as casual from 'casual-browserify';
import { range, chunk, mapKeys } from 'lodash';

type Row = Record<string, string>;

const NUM_ROWS = 1 * 1000;
const NUM_COLS = 22;
const WORDS = casual.array_of_words(NUM_ROWS * NUM_COLS);
const ROWS = chunk(WORDS, NUM_COLS);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Convert number keys to string keys:
  displayedColumns = range(NUM_COLS).map(String);
  rows: Row[] = ROWS.map(r => mapKeys(r, (_v, k) => String(k)));
}
