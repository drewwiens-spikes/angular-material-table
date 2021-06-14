import { CdkVirtualScrollViewport as Viewport } from '@angular/cdk/scrolling';
import {
  AfterContentChecked,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatHeaderCell } from '@angular/material/table';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { RowsStateService } from '../../services/rows-state.service';
import { Row, RowsService } from '../../services/rows.service';

@Component({
  selector: 'app-table6',
  templateUrl: './table6-aligned-header.component.html',
  styleUrls: ['./table6-aligned-header.component.scss'],
})
export class Table6WithAlignedHeaderComponent implements AfterContentChecked {
  @ViewChild(Viewport, { read: ElementRef }) set viewport(
    ele: ElementRef | undefined
  ) {
    this._viewportRef = ele;
    this._viewportChanges.next();
  }

  @ViewChildren(MatHeaderCell, { read: ElementRef })
  headerCells?: QueryList<ElementRef>;

  show = new BehaviorSubject<boolean>(true);
  lastHeaderNgStyle = new Subject<Record<string, string>>();

  private _viewportChanges = new Subject<void>();
  private _viewportRef?: ElementRef;
  private _prevHasScrollbar = false;
  private _initialPadding?: number;

  constructor(
    public rowsSvc: RowsService,
    public rowsStateSvc: RowsStateService
  ) {}

  ngAfterContentChecked() {
    this.updateHeaderPadding();
  }

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

  /** Add scrollbar width to header padding so header cells align with tables. */
  private updateHeaderPadding() {
    if (!this._viewportRef) {
      return;
    }
    const viewport: HTMLElement = this._viewportRef.nativeElement;
    const hasScrollbar = viewport.scrollHeight > viewport.clientHeight;
    if (this._prevHasScrollbar !== hasScrollbar) {
      const scrollbarWidth = viewport.offsetWidth - viewport.clientWidth; // Method: https://stackoverflow.com/q/28360978
      const newPadding = `${this.getBasePadding() + scrollbarWidth}px`;
      this.lastHeaderNgStyle.next({ 'padding-right': newPadding });
      this._prevHasScrollbar = hasScrollbar;
    }
  }

  /** Save original padding on init so that updateHeaderPadding can use it. */
  private getBasePadding() {
    // Get initial padding only the first time this function is called:
    if (!this._initialPadding && this.headerCells) {
      const lastHdrIdx = this.rowsSvc.cols.length - 1;
      const lastHdrCell = this.headerCells.toArray()[lastHdrIdx];
      const currentStyle = getComputedStyle(lastHdrCell.nativeElement);
      const paddingStr = currentStyle.getPropertyValue('padding-right');
      this._initialPadding = parseInt(paddingStr);
    }
    return this._initialPadding || 0;
  }

  /** Add (or remove) CDK virtual scroll viewport from the DOM */
  private async showViewport(shouldShow = true) {
    this.show.next(shouldShow);
    await this._viewportChanges.pipe(take(1)).toPromise();
  }

  /** Remove CDK virtual scroll viewport from the DOM */
  private async hideViewport() {
    await this.showViewport(false);
  }
}
