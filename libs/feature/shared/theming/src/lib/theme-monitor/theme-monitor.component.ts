import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, skip, Subscription } from 'rxjs';
import { ThemeState } from '../../state/theme.state';

import { AVAILABLE_THEMES, AppSiteTheme } from '../available-themes';

@Component({
    selector: 'theme-monitor',
    template: ``,
    styles: [],
    encapsulation: ViewEncapsulation.None,
})
export class ThemeMonitorComponent implements OnInit, OnDestroy {

    private themeFileKey: string = 'theme-variables';

    @Select(ThemeState.themeName)
    themeName$: Observable<string> | undefined;

    @Select(ThemeState.themeVariant)
    themeVariant$: Observable<string> | undefined;
    theme: AppSiteTheme | undefined;

    @Select(ThemeState.getThemeCssFile)
    themeCssFile$: Observable<string> | undefined;

    private subscription: Subscription = new Subscription();

    constructor(
        private liveAnnouncer: LiveAnnouncer,
        private store: Store
    ) {}

    ngOnInit(): void {

        const firstTheme = this.store.selectSnapshot(ThemeState.themeName);
        AVAILABLE_THEMES.find((theme) => {
            if (theme.name === firstTheme) {
                this.theme = theme;
            }
        });

        this.subscription.add(this.themeCssFile$?.subscribe((themeFile: string) => {
            this.setStyle(themeFile);
        }));

        this.subscription.add(this.themeName$?.pipe(skip(1)).subscribe(themeName => {
            AVAILABLE_THEMES.find((theme) => {
                if (theme.name === themeName) {
                    this.theme = theme;
                    this.liveAnnouncer.announce(
                        `${theme.displayName} theme selected.`,
                        'polite',
                        3000
                    );
                }
            });
        }));

        this.subscription.add(this.themeVariant$?.pipe(skip(1)).subscribe(themeVariant => {

            const themeName = this.theme?.displayName;

            this.liveAnnouncer.announce(
                `${themeName} theme changed to ${themeVariant} variant.`,
                'polite',
                3000
            );

        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    // privates

    private setStyle(href: string) {
        this.getLinkElementForKey(this.themeFileKey).setAttribute('href', href);
    }

    private getLinkElementForKey(key: string) {
        return this.getExistingLinkElementByKey(this.themeFileKey) || this.createLinkElementWithKey(this.themeFileKey);
    }

    private getExistingLinkElementByKey(key: string) {
        return document.head.querySelector(
            `link[rel="stylesheet"].${this.getClassNameForKey(this.themeFileKey)}`
        );
    }

    private createLinkElementWithKey(key: string) {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.classList.add(this.getClassNameForKey(key));
        document.head.appendChild(linkEl);
        return linkEl;
    }

    private getClassNameForKey(key: string) {
        return `${key}`;
    }
}
