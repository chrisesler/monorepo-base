import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@cesler/shared';

import { AlertComponent } from './alert/alert.component';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { TestComponent } from './test/test.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        AlertComponent,
        KitchenSinkComponent,
        TestComponent
    ],
    exports: [
        AlertComponent,
        KitchenSinkComponent,
        TestComponent
    ]
})
export class UiModule {}
