import { Component, Input } from '@angular/core';
import { keys, mapKeys, random, range } from 'lodash';
import { Row, StateService } from 'src/app/state.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() row?: Row;

  // Make a random # of rows filled with random numbers:
  rows = range(random(1, 5)).map(() =>
    mapKeys(
      range(25).map(() => random(1, 1000)),
      (_v, k) => String(k)
    )
  );
  cols = keys(this.rows[0]);

  constructor(public state: StateService) {}
}
