import { Component } from '@angular/core';

import { RowsService } from '../services/rows.service';

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.scss']
})
export class Table4Component {
  constructor(public rowsSvc: RowsService) {}
}
