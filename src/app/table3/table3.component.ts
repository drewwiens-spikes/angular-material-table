import { Component } from '@angular/core';

import { RowsStateService } from '../services/rows-state.service';
import { RowsService } from '../services/rows.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss'],
})
export class Table3Component {
  constructor(
    public rowsSvc: RowsService,
    public rowsStateSvc: RowsStateService
  ) {}
}
