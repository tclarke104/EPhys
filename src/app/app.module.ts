import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule }  from '@angular/cdk/scrolling';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { RunComponent } from './run/run.component';
import { LoadingComponent } from './loading/loading.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ViewComponent } from './view/view.component';
import { ExperimentLineComponent } from './experiment-line/experiment-line.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageComponent,
    RunComponent,
    LoadingComponent,
    ProjectCardComponent,
    ViewComponent,
    ExperimentLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    NgxChartsModule,
    ChartsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
