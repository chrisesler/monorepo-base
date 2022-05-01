import {
    Component,
    HostBinding,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../../../apps/web/src/app/state/app.state';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class FooterComponent implements OnInit {
    @HostBinding('class') classAttribute: string = 'app-footer';

    @Select(AppState.getAppVersion) version$: Observable<string> | undefined;

    constructor() {}

    ngOnInit(): void {}
}
