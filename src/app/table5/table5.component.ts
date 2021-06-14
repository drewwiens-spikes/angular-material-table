import { Component } from '@angular/core';

import { RowsService } from '../services/rows.service';

@Component({
  selector: 'app-table5',
  templateUrl: './table5.component.html',
  styleUrls: ['./table5.component.scss']
})
export class Table5Component {
  constructor(public rowsSvc: RowsService) {}
}
