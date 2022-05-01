import {
    Component,
    HostBinding,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'app-nav-shell',
    templateUrl: './navigation-shell.component.html',
    styleUrls: ['./navigation-shell.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class NavigationShellComponent implements OnInit {
    @HostBinding('class') classAttribute: string = 'navigation-shell';

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe([Breakpoints.Handset])
        .pipe(
            map((result) => result.matches),
            shareReplay()
        );

    constructor(
        private breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {}

}
