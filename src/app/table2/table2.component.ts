import { Component } from '@angular/core';

import { StateService } from '../state.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component {
  constructor(public state: StateService) {}
}
