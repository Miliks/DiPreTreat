import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import {AgvServiceService} from '../api/agv-service.service';
import {ChartsModule} from 'ng2-charts';
import { TrackingComponent } from './tracking/tracking.component';
import { WmsInsertDataComponent } from './wms-insert-data/wms-insert-data.component';
import { WmsGetDataComponent } from './wms-get-data/wms-get-data.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AngularFontAwesomeModule} from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TrackingComponent,
    WmsInsertDataComponent,
    WmsGetDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    ChartsModule,
    AngularFontAwesomeModule,
    MatSelectModule


  ],
  providers: [AgvServiceService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
