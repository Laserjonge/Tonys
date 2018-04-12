import { Component, OnInit } from '@angular/core';
import { RouteNames } from '../common/helpers/route-names';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    routeNames = RouteNames;

    constructor() { }

    ngOnInit() {
    }
}
