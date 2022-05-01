import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { FeatureRouterRoutingModule } from './feature-router-routing.module';

import { FeatureRouterComponent } from './feature-router.component';

export const FeatureRouterRoutes: Route[] = [];

@NgModule({
    imports: [
        CommonModule,
        FeatureRouterRoutingModule
    ],
    declarations: [
      FeatureRouterComponent
    ],
    exports: [
      FeatureRouterComponent
    ],
})
export class FeatureRouterModule {}
