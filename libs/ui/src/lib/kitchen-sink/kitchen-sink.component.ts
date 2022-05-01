import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { DataSource} from '@angular/cdk/table';
import { Observable, of as observableOf } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export class TableDataSource extends DataSource<any> {
    connect(): Observable<any> {
      return observableOf([{userId: 1}, {userId: 2}]);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    disconnect() {}
  }

  @Component({
    template: `<button>Do the thing</button>`,
  })
  export class TestEntryComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KitchenSinkComponent {

  /** List of columns for the CDK and Material table. */
  tableColumns = ['userId'];

  /** Data source for the CDK and Material table. */
  tableDataSource = new TableDataSource();

  /** Data used to render a virtual scrolling list. */
  virtualScrollData = Array(10000).fill(50);

  constructor(
    snackBar: MatSnackBar,
    dialog: MatDialog,
    viewportRuler: ViewportRuler,
    focusMonitor: FocusMonitor,
    elementRef: ElementRef<HTMLElement>,
    bottomSheet: MatBottomSheet,
  ) {
    focusMonitor.focusVia(elementRef, 'program');
    snackBar.open('Hello there');
    dialog.open(TestEntryComponent);
    bottomSheet.open(TestEntryComponent);

    // Do a sanity check on the viewport ruler.
    viewportRuler.getViewportRect();
    viewportRuler.getViewportSize();
    viewportRuler.getViewportScrollPosition();
  }

}
