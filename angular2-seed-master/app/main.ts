import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {AppArbiter} from './arbiter'
import {Onnotifications} from './onnotifications'

bootstrap(AppArbiter);
bootstrap(Onnotifications);
//bootstrap(AppComponent);
