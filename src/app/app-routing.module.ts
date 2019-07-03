import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { LoginComponent } from '../app/login/login.component';
import { FitnessTrackComponent } from '../app/fitness-track/fitness-track.component';
import { SampleComponent } from '../app/sample/sample.component';
import { RegisterComponent } from '../app/register/register.component';
import { MyDashboardComponent } from '../app/my-dashboard/my-dashboard.component';
import { MyDashboardResolver } from '../app/my-dashboard/my-dashboard.resolver';
import { CalenderViewResolver } from '../app/my-dashboard/calender-view/calender-view.resolver';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'sample',
    component: SampleComponent,
    data: {title: 'Sample Bootstrap Details'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login Details'}
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {title: 'Dashboard details'}
  },
  {
    path: 'fitness-track',
    component: FitnessTrackComponent,
    data: {title: 'Fitness-Track'}
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {title: 'Register'}
  },
  {
    path: 'MyDashboard',
    component: MyDashboardComponent,
    data: {title: 'MyDashBoard'},
    resolve: {content: MyDashboardResolver, calD: CalenderViewResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
