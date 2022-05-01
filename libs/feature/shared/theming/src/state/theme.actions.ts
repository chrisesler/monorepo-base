export class SetThemeName {
    static readonly type = '[Storage] SetThemeName';

    constructor(public payload: string) {}
}

export class SetThemeVariant {
    static readonly type = '[Storage] SetThemeVariant';

    constructor(public payload: string) {}
}
