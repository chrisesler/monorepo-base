import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

//import { ThemePickerModule } from '../theme-picker';
//import { VersionPickerModule } from '../version-picker';
//import { ThemeStorage } from '../theme-picker/theme-storage/theme-storage';
//import { StyleManager } from '../style-manager';

import { ThemingModule } from '@cesler/feature/shared/theming';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatMenuModule,
        ThemingModule,
        RouterModule,
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    //providers: [StyleManager, ThemeStorage]
})
export class NavbarModule {}
