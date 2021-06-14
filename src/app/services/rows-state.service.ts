import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Row, RowsService } from './rows.service';

@Injectable({ providedIn: 'root' })
export class RowsStateService {
  expanded: Set<Row> = new Set();
  collapsed: Set<Row> = new Set(this.rowsSvc.rows);

  constructor(private snackBar: MatSnackBar, private rowsSvc: RowsService) {}

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
      for (const row of this.rowsSvc.rows) {
        this.expanded.add(row);
      }
      setTimeout(() => showElapsedTime('Expand-all'));
    } else {
      this.expanded.clear();
      for (const row of this.rowsSvc.rows) {
        this.collapsed.add(row);
      }
      setTimeout(() => showElapsedTime('Collapse-all'));
    }
  }
}
