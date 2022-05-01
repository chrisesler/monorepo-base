import { Injectable } from '@angular/core';
import { Selector, State, StateToken } from '@ngxs/store';

import { AppStateModel } from './app.model';

const defaultAppState = (): AppStateModel => {
    return {
        version: '0.0.1',
        name: 'Monorepo Base',
        author: 'Chris Esler'
    };
}

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('AppState');

@State<AppStateModel>({
    name: APP_STATE_TOKEN,
    defaults: defaultAppState()
})
@Injectable()
export class AppState {

    @Selector([APP_STATE_TOKEN])
    static getAppVersion({version}: AppStateModel) {
        return version;
    }

    @Selector([APP_STATE_TOKEN])
    static getAppName({name}: AppStateModel) {
        return name;
    }

    @Selector([APP_STATE_TOKEN])
    static getAppAuthor({author}: AppStateModel) {
        return author;
    }

    constructor() {}
}
