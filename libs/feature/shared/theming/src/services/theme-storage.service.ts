import { Injectable, EventEmitter } from '@angular/core';
import { StyleManagerService } from './style-manager.service';

import {
    AVAILABLE_THEMES,
    AppSiteTheme,
} from '../lib/available-themes';

@Injectable({ providedIn: 'root' })
export class ThemeStorageService {
    static themeStorageKey = 'app-theme-name';
    static variantStorageKey = 'app-theme-variant'; // light or dark

    onThemeUpdate: EventEmitter<AppSiteTheme> =
        new EventEmitter<AppSiteTheme>();

    onVariantUpdate: EventEmitter<'light' | 'dark'> =
        new EventEmitter<'light' | 'dark'>();

    constructor(private styleManager: StyleManagerService) {
        console.log('THEME STORAGE CONSTRUCTOR');

        const themeName = this.getStoredThemeName();
        const themeVariant = this.getStoredThemeVariant() || 'light';
        //let themeVariant;
        if (themeName) {
            this.styleManager.setStyle('theme', `${themeName}-${themeVariant}-theme.css`);
        } else {
            AVAILABLE_THEMES.find((theme) => {
                if (theme.isDefault === true) {
                    this.styleManager.setStyle('theme', `${theme.name}-${themeVariant}-theme.css`);
                    this.storeTheme(theme);
                }
            });
        }
    }

    storeTheme(theme: AppSiteTheme) {
        try {
            window.localStorage[ThemeStorageService.themeStorageKey] = theme.name;
        } catch {}

        this.onThemeUpdate.emit(theme);
    }

    getStoredThemeName(): string | null {
        try {
            return window.localStorage[ThemeStorageService.themeStorageKey] || null;
        } catch {
            return null;
        }
    }

    storeVariant(variant: 'light' | 'dark') {
        try {
            window.localStorage[ThemeStorageService.variantStorageKey] = variant;
        } catch {}

        this.onVariantUpdate.emit(variant);
    }

    getStoredThemeVariant(): string | null {
        try {
            return window.localStorage[ThemeStorageService.variantStorageKey] || null;
        } catch {
            return null;
        }
    }

    clearStorage() {
        try {
            window.localStorage.removeItem(ThemeStorageService.themeStorageKey);
            window.localStorage.removeItem(ThemeStorageService.variantStorageKey);
        } catch {}
    }
}
