import { Component, HostBinding, OnInit } from '@angular/core';
@Component({
    selector: 'cesler-web-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @HostBinding('class') classAttribute: string = 'cesler-web-app';

    title = 'web app';

    constructor() {}

    ngOnInit() {}

}
