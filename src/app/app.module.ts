import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FitnessTrackComponent } from './fitness-track/fitness-track.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './AuthInterceptor';
import { WorkoutDetailsComponent } from './dashboard/workout-details/workout-details.component';
import { SampleComponent } from './sample/sample.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { WeekDataComponent } from './my-dashboard/week-data/week-data.component';
import { CalenderViewComponent } from './my-dashboard/calender-view/calender-view.component';
import { ProgressDonutChartComponent } from './my-dashboard/progress-donut-chart/progress-donut-chart.component';
import { LineChartDataComponent } from './my-dashboard/line-chart-data/line-chart-data.component';
//import { WeekDataService } from './my-dashboard/week-data/week-data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FitnessTrackComponent,
    WorkoutDetailsComponent,
    SampleComponent,
    RegisterComponent,
    MyDashboardComponent,
    WeekDataComponent,
    CalenderViewComponent,
    ProgressDonutChartComponent,
    LineChartDataComponent
  ],
  imports: [
    //RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true},
    AppModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
