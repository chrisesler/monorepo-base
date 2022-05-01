import { Injectable } from '@angular/core';

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable()
export class StyleManagerService {
    isDark = false;

    toggleDarkTheme() {
        if (this.isDark) {
            this.removeStyle('dark-theme');
            document.body.classList.remove('dark-theme');
            this.isDark = false;
        } else {
            const href = 'dark-theme.css';
            getLinkElementForKey('dark-theme').setAttribute('href', href);
            document.body.classList.add('dark-theme');
            this.isDark = true;
        }
    }

    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(themeName: string, themeVariant: string) {
        let href = `${themeName}-${themeVariant}-theme.css`;
        getLinkElementForKey(themeName).setAttribute('href', href);
    }

    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key: string) {
        const existingLinkElement = getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }
}

function getLinkElementForKey(key: string) {
    return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(
        `link[rel="stylesheet"].${getClassNameForKey(key)}`
    );
}

function createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
}

function getClassNameForKey(key: string) {
    return `style-manager-${key}`;
}
