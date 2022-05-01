import {
    Component,
    HostBinding,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

import { Subscription } from 'rxjs';
//import { NavigationFocusService } from '../navigation-focus/navigation-focus.service';

export interface AppSection {
    name: string;
    summary: string;
}

const EXAMPLES = 'examples';
export const SECTIONS: { [key: string]: AppSection } = {
    [EXAMPLES]: {
      name: 'Examples',
      summary: 'Example section'
    }
  };

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit, OnDestroy {
    @HostBinding('class') classAttribue: string = 'app-navbar';

    private subscriptions = new Subscription();

    constructor() {

    }

    get sections() {
        return SECTIONS;
    }

    get sectionKeys() {
        return SECTIONS_KEYS;
    }

    ngOnInit() {}

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
