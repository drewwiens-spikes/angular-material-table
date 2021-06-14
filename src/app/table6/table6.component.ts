import { CdkVirtualScrollViewport as Viewport } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { RowsStateService } from '../services/rows-state.service';
import { Row, RowsService } from '../services/rows.service';

@Component({
  selector: 'app-table6',
  templateUrl: './table6.component.html',
  styleUrls: ['./table6.component.scss'],
})
export class Table6Component {
  @ViewChild(Viewport) set viewport(_vp: Viewport) {
    this.viewportChanges.next();
  }

  show = new BehaviorSubject<boolean>(true);

  private viewportChanges = new Subject<void>();

  constructor(
    public rowsSvc: RowsService,
    public rowsStateSvc: RowsStateService
  ) {}

  /** Get the value of the cell in the 1st column */
  firstColumn(_index: number, item: Row) {
    return item['0'];
  }

  /** Expand or collapse all rows */
  async toggleAll() {
    this.rowsStateSvc.before = performance.now();

    // XXX: "scrollToIndex is currently not supported for the autosize scroll
    // strategy" --> Have to reset the scroll position to the top:
    await this.hideViewport();

    this.rowsStateSvc.toggleAll();

    await this.showViewport();
  }

  /** Add (or remove) CDK virtual scroll viewport from the DOM */
  private async showViewport(shouldShow = true) {
    this.show.next(shouldShow);
    await this.viewportChanges.pipe(take(1)).toPromise();
  }

  /** Remove CDK virtual scroll viewport from the DOM */
  private async hideViewport() {
    await this.showViewport(false);
  }
}
