import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
//import {TrackingComponent} from './tracking/tracking.component';
import {WmsGetDataComponent} from './wms-get-data/wms-get-data.component';
import {WmsInsertDataComponent} from './wms-insert-data/wms-insert-data.component';
import {DipretreatMenuComponent} from './dipretreat-menu/dipretreat-menu.component';
//import {LoginDTWINComponent} from './login-dtwin/login-dtwin.component';
//import {TrackingListComponent} from './tracking-list/tracking-list.component';
import {SettingsAgvComponent} from './settings-agv/settings-agv.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'WmsGet', component: WmsGetDataComponent},
  { path: 'WmsInsert', component: WmsInsertDataComponent},
  { path: 'DiPreTreatHome', component: DipretreatMenuComponent},
  /*{ path: 'LoginDTWIN', component: LoginDTWINComponent},
  { path: 'Tracking', component: TrackingComponent},
  { path: 'TrackingList', component: TrackingListComponent},
  { path: 'SettingsAGV', component: SettingsAgvComponent},*/
  { path: '', redirectTo: '/Login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
