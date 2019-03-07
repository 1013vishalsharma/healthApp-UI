import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { LoginComponent } from '../app/login/login.component';
import { FitnessTrackComponent } from '../app/fitness-track/fitness-track.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
