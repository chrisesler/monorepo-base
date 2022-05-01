import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { ThemeState } from '../state/theme.state';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StyleManagerService } from '../services/style-manager.service';
import { ThemeStorageService } from '../services/theme-storage.service';

import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { VariantPickerComponent } from './variant-picker/variant-picker.component';
import { ThemeMonitorComponent } from './theme-monitor/theme-monitor.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule
      ],
    declarations: [
      ThemePickerComponent,
      VariantPickerComponent,
      ThemeMonitorComponent
    ],
    exports: [
      ThemePickerComponent,
      VariantPickerComponent,
      ThemeMonitorComponent
    ],
    providers: [StyleManagerService, ThemeStorageService],
})
export class ThemingModule {}
