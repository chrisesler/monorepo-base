import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

//import { CoreModule } from '@cesler/core';
//import { FeatureSharedModule } from '@cesler/feature/shared';
//import { SharedModule } from '@cesler/shared';
import { UiModule } from '@cesler/ui';

import { NavigationShellModule } from '@cesler/feature/shared/navigation-shell';

import { environment } from '../environments/environment';

import { AppState } from './state/app.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { ThemingModule } from '@cesler/feature/shared/theming';
import { ThemeState, THEME_STATE_TOKEN } from 'libs/feature/shared/theming/src/state/theme.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //SharedModule,
    //CoreModule,
    //FeatureSharedModule,
    ThemingModule,
    UiModule,
    //RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    NavigationShellModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState, ThemeState], {
        developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
        key: 'ThemeState'
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
        disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
