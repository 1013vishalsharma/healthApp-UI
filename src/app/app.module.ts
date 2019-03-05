import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

// const appRoutes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent,
//     data: {title: 'Login Details'}
//   },
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     data: {title: 'Dashboard details'}
//   }
// ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    //RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
