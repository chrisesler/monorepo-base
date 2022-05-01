import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NavbarModule } from '@cesler/feature/shared/navbar';
import { FooterModule } from '@cesler/feature/shared/footer';

import { NavigationShellComponent } from './navigation-shell.component';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        NavbarModule,
        FooterModule
    ],
    declarations: [NavigationShellComponent],
    exports: [NavigationShellComponent],
})
export class NavigationShellModule {}
