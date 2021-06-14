import { Component } from '@angular/core';

import { RowsService } from '../services/rows.service';

@Component({
  selector: 'app-table0',
  templateUrl: './table0.component.html',
  styleUrls: ['./table0.component.scss']
})
export class Table0Component {
  constructor(public rowsSvc: RowsService) {}
}
