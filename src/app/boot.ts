import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {App}     from './components/app/app.component';

bootstrap(App, [ROUTER_PROVIDERS])
  .catch(err => console.error(err));
