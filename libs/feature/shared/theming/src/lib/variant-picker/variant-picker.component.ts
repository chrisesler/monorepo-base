import {
    Component,
    HostBinding,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { SetThemeVariant } from '../../state/theme.actions';
import { ThemeState } from '../../state/theme.state';

@Component({
    selector: 'app-variant-picker',
    templateUrl: './variant-picker.component.html',
    styleUrls: ['./variant-picker.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class VariantPickerComponent implements OnInit, OnDestroy {
    @HostBinding('class') classAttribute: string = 'theme-variant-picker';

    @Select(ThemeState.themeVariant)
    themeVariant$: Observable<string> | undefined;

    private subscription: Subscription = new Subscription();

    isDark = false;

    constructor(
        private store: Store
    ) {}

    ngOnInit(): void {

        this.subscription.add(this.themeVariant$?.subscribe(variant => {
            this.isDark = variant === 'dark';
            console.log('%cTHEME VARIANT :: VARIANT SUB', 'color: white; background: purple', {
                variant,
                isDark: this.isDark
            });
        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    toggleDarkTheme() {
        this.isDark = !this.isDark;
        this.store.dispatch(new SetThemeVariant(this.isDark? 'dark' : 'light'));
    }
}
