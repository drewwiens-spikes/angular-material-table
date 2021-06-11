import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { range } from 'lodash';

import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  range = range;

  constructor(public state: StateService, private snackBar: MatSnackBar) {
    this.measureTime();
  }

  async measureTime() {
    const before = performance.now();

    // Wait until the events in the event loop finish:
    await new Promise<void>((resolve) => setTimeout(() => resolve()));

    const after = performance.now();
    const diff = Math.round(after - before);

    this.snackBar.open(
      `Table took ${diff} ms to load`,
      undefined,
      { duration: 4000 }
    );
  }
}
