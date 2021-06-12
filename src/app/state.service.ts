import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { range, chunk, mapKeys, random } from 'lodash';

export type Row = Record<string, string | number | boolean>;

const NUM_ROWS = 250;
const NUM_COLS = 25;
const VALUES = range(NUM_ROWS * NUM_COLS).map(() => random(1, 1000));
const ROWS = chunk(VALUES, NUM_COLS);

@Injectable({ providedIn: 'root' })
export class StateService {
  cols = range(NUM_COLS).map(String);
  rows: Row[] = ROWS.map((r) => mapKeys(r, (_v, k) => String(k)));
  expanded: Set<Row> = new Set();
  collapsed: Set<Row> = new Set(this.rows);

  constructor(private snackBar: MatSnackBar) {}

  toggle(row: Row) {
    if (this.expanded.has(row)) {
      this.expanded.delete(row);
      this.collapsed.add(row);
    } else {
      this.expanded.add(row);
      this.collapsed.delete(row);
    }
  }

  toggleAll() {
    const before = performance.now();
    const showElapsedTime = (label: string) => {
      const after = performance.now();
      const diff = Math.round(after - before);
      this.snackBar.open(
        `${label} took ${diff} ms to load`,
        undefined,
        { duration: 4000 }
      );
    }

    if (this.collapsed.size) {
      // Expand if any are collapsed
      this.collapsed.clear();
      for (const row of this.rows) {
        this.expanded.add(row);
      }
      setTimeout(() => showElapsedTime('Expand-all'));
    } else {
      this.expanded.clear();
      for (const row of this.rows) {
        this.collapsed.add(row);
      }
      setTimeout(() => showElapsedTime('Collapse-all'));
    }
  }
}
