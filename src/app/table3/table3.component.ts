import { Component } from '@angular/core';

import { StateService } from '../state.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss']
})
export class Table3Component {
  constructor(public state: StateService) {}
}
