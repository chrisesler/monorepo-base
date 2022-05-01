export interface AppSiteTheme {
    name: string;
    displayName?: string;
    accent: string;
    primary: string;
    isDark?: boolean;
    isDefault?: boolean;
    variants?: {
        light: boolean;
        dark: boolean;
    }
}

export const AVAILABLE_THEMES_BAK: AppSiteTheme[] = [
    {
        primary: '#673AB7',
        accent: '#FFC107',
        displayName: 'Deep Purple & Amber',
        name: 'deeppurple-amber',
        isDark: false,
    },
    {
        primary: '#3F51B5',
        accent: '#E91E63',
        displayName: 'Indigo & Pink',
        name: 'indigo-pink',
        isDark: false,
        isDefault: true,
    },
    {
        primary: '#E91E63',
        accent: '#607D8B',
        displayName: 'Pink & Blue-grey',
        name: 'pink-bluegrey',
        isDark: true,
    },
    {
        primary: '#9C27B0',
        accent: '#4CAF50',
        displayName: 'Purple & Green',
        name: 'purple-green',
        isDark: true,
    },
];

export const AVAILABLE_THEMES: AppSiteTheme[] = [
    {
        primary: '#673AB7',
        accent: '#FFC107',
        displayName: 'Default',
        name: 'default',
        variants: {
            light: true,
            dark: true
        }
    },
    {
        primary: '#673AB7',
        accent: '#FFC107',
        displayName: 'Other',
        name: 'other',
        variants: {
            light: true,
            dark: true
        }
    }
];


