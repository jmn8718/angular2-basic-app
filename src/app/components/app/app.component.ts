import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PlaceComponent } from '../place/place.component';

@Component({
    selector: 'my-app',
    templateUrl:'./app/components/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/place',
    name: 'Place',
    component: PlaceComponent
  },
  {
    path: '/**', redirectTo: ['Dashboard']
  }
])
export class App { }
