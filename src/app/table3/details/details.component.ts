import { Component, Input } from '@angular/core';
import { keys, mapKeys } from 'lodash';
import { Row, StateService } from 'src/app/state.service';

const WORDS = [
  'autem',     'voluptas',
  'qui',       'nisi',
  'ea',        'inventore',
  'sequi',     'dolore',
  'molestiae', 'cum'
];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() row?: Row;

  rows = [mapKeys(WORDS, (_v, k) => String(k))];
  cols = keys(this.rows[0]);

  constructor(public state: StateService) {}
}
