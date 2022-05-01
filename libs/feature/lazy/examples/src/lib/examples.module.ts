import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SharedModule } from '@cesler/shared';
//import { UiModule } from '@cesler/ui';
import { ExamplesRoutingModule} from './examples-routing.module';

import { ExamplesComponent } from './examples.component';

@NgModule({
    imports: [
        CommonModule,
        //SharedModule,
        //UiModule,
        ExamplesRoutingModule
    ],
    declarations: [
      ExamplesComponent
    ],
})
export class ExamplesModule {}
