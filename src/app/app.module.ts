import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HealthyCheckComponent } from './healthy-check/healthy-check.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { BadfetchComponent } from './healthy-check/badfetch/badfetch.component';
import { DropcallsComponent } from './healthy-check/dropcalls/dropcalls.component';
import { HeaderComponent } from './header/header.component';
import { RetrieveDataService } from '../app/services/retrieve-data.service';
import { AutheServiceService } from '../app/authenticate-service/authe-service.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from '../app/authenticate/auth.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'healthyCheck', component: HealthyCheckComponent, canActivate: [AuthGuard] },
  { path: 'dropcalls', component: DropcallsComponent },
  { path: 'badfetch', component: BadfetchComponent },
  { path: '**', component: LoginComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HealthyCheckComponent,
    AdminComponent,
    LoginComponent,
    BadfetchComponent,
    DropcallsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RetrieveDataService,
    AuthGuard,
    AutheServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
