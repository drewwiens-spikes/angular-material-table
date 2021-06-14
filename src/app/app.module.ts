import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling'; // TODO: Remove this lib from package.json when AutoSizeVirtualScrollStrategy becomes part of CDK

import { AppComponent } from './app.component';
import { Table0Component } from './table0/table0.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { Table4Component } from './table4/table4.component';
import { Table5Component } from './table5/table5.component';
import { Table6Component } from './table6/table6.component';
import { Table7Component } from './table7/table7.component';
import { Table8Component } from './table8/table8.component';
import { DetailsComponent } from './table3/details/details.component';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';

const routes: Route[] = [
  { path: '', redirectTo: '0', pathMatch: 'full' },
  { path: '0', component: Table0Component },
  { path: '1', component: Table1Component },
  { path: '2', component: Table2Component },
  { path: '3', component: Table3Component },
  { path: '4', component: Table4Component },
  { path: '5', component: Table5Component },
  { path: '6', component: Table6Component },
  { path: '7', component: Table7Component },
  { path: '8', component: Table8Component },
];

/** Imports from Angular Material CDK */
const cdkImports = [ScrollingModule, ExperimentalScrollingModule];

/** Imports from Angular Material */
const matImports = [
  MatTableModule,
  MatToolbarModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    Table0Component,
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component,
    Table5Component,
    Table6Component,
    Table7Component,
    DetailsComponent,
    Table8Component,
  ],
  imports: [
    ...matImports,
    ...cdkImports,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    TableVirtualScrollModule, // For https://diprokon.github.io/ng-table-virtual-scroll
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
