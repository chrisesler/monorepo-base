import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SharedModule } from '@cesler/shared';
import { UiModule } from '@cesler/ui';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        //SharedModule,
        UiModule,
        HomeRoutingModule
    ],
    declarations: [
      HomeComponent
    ],
})
export class HomeModule {}
