import { Component } from '@angular/core';

import { StateService } from '../state.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component {
  constructor(public state: StateService) {}
}
