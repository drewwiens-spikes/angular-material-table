import { AutoSizeVirtualScrollStrategy } from '@angular/cdk-experimental/scrolling';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';
import { range } from 'lodash';
import { BehaviorSubject, } from 'rxjs';

import { RowsStateService } from '../services/rows-state.service';
import { Row, RowsService } from '../services/rows.service';

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.scss'],
})
export class Table4Component {
  @ViewChild(CdkVirtualScrollViewport)
  autosize?: CdkVirtualScrollViewport;

  show = new BehaviorSubject<boolean>(true);

  constructor(
    public rowsSvc: RowsService,
    public rowsStateSvc: RowsStateService
  ) {}

  firstColumn(_index: number, item: Row) {
    return item['0']; // Return value of 1st column
  }

  toggleAll() {
    this.show.next(false);

    this.rowsStateSvc.toggleAll();

    setTimeout(() =>
      this.show.next(true));// Force re-evaluate average row size

    // setTimeout(()=>{
    //   if (this.autosize) {
    //     // this.autosize.scrollToIndex(0)
    //     // for (const _i of range(100)) {
    //     //   this.autosize['_updateRenderedContentAfterScroll']()
    //     // }
    //     this.autosize.scrollTo({top:0})
    //   }
    // }, 2000)



    // setTimeout(() => this.show.next(true));
  }
}
