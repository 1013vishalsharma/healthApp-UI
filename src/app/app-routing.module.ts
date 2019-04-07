import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { LoginComponent } from '../app/login/login.component';
import { FitnessTrackComponent } from '../app/fitness-track/fitness-track.component';
import { SampleComponent } from '../app/sample/sample.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sample',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
