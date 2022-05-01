import {
    ChangeDetectionStrategy,
    Component,
    Input,
    NgModule,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { MatIconRegistry } from '@angular/material/icon';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { StyleManagerService } from '../../services/style-manager.service';
import {
    ThemeStorageService,
} from '../../services/theme-storage.service';

import { AVAILABLE_THEMES, AppSiteTheme } from '../available-themes';
import { Select, Store } from '@ngxs/store';
import { SetThemeName } from '../../state/theme.actions';
import { ThemeState } from '../../state/theme.state';

@Component({
    selector: 'app-theme-picker',
    templateUrl: './theme-picker.component.html',
    styleUrls: ['./theme-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class ThemePickerComponent implements OnInit, OnDestroy {

    //private _queryParamSubscription = Subscription.EMPTY;

    @Select(ThemeState.themeName)
    themeName$: Observable<string> | undefined;

    currentTheme: AppSiteTheme | undefined;

    // The below colors need to align with the themes defined in theme-picker.scss
    themes: AppSiteTheme[] = AVAILABLE_THEMES;

    private subscription: Subscription = new Subscription();

    constructor(
        private store: Store,
    ) {}

    ngOnInit() {
        this.subscription.add(this.themeName$?.subscribe(themeName => {

            this.currentTheme = this.themes.find(
                (theme) => theme.name === themeName
            );
            console.log('%cTHEME PICKER :: THEME SUB', 'color: white; background: purple', {
                themeName,
                currentTheme: this.currentTheme
            });
        }));

        /*this._queryParamSubscription = this._activatedRoute.queryParamMap
            .pipe(map((params: ParamMap) => params.get('theme')))
            .subscribe((themeName: string | null) => {
                if (themeName) {
                    this.selectTheme(themeName);
                }
            });*/
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    selectTheme(themeName: string) {
        const theme = this.themes.find(
            (currentTheme) => currentTheme.name === themeName
        );

        if (!theme) {
            return;
        }

        this.currentTheme = theme;

        this.store.dispatch(new SetThemeName(theme.name));

        /*if (theme.isDefault) {
            this.styleManager.removeStyle('theme');
        } else {
            this.styleManager.setStyle('theme', `${theme.name}.css`);
        }

        if (this.currentTheme) {
            this.liveAnnouncer.announce(
                `${theme.displayName} theme selected.`,
                'polite',
                3000
            );
            this._themeStorage.storeTheme(this.currentTheme);
        }*/
    }
}
