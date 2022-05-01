import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { SetThemeName, SetThemeVariant } from './theme.actions';
import { ThemeStateModel } from './theme.model';

const defaultThemeState = (): ThemeStateModel => {
    return {
        theme: 'default',
        variant: 'light'
    };
}

export const THEME_STATE_TOKEN = new StateToken<ThemeStateModel>('ThemeState');

@State<ThemeStateModel>({
    name: THEME_STATE_TOKEN,
    defaults: defaultThemeState()
})
@Injectable()
export class ThemeState {

    @Selector([THEME_STATE_TOKEN])
    static themeName(state: ThemeStateModel): string | null {
        return state.theme;
    }

    @Selector([THEME_STATE_TOKEN])
    static themeVariant(state: ThemeStateModel): string | null {
        return state.variant;
    }

    @Selector([THEME_STATE_TOKEN])
    static getThemeCssFile(state: ThemeStateModel): string {
        const theme: string | null = state.theme ? state.theme : 'default';
        const variant: string | null = state.variant ? state.variant : 'light';
        return `${theme}-${variant}-theme.css`;
    }

    constructor() {}

    @Action(SetThemeName)
    setThemeName({getState, patchState}: StateContext<ThemeStateModel>, {payload}: SetThemeName) {
        patchState({
            theme: payload
        });
    }

    @Action(SetThemeVariant)
    setThemeVariant({getState, patchState}: StateContext<ThemeStateModel>, {payload}: SetThemeVariant) {
        patchState({
            variant: payload
        });
    }
}

