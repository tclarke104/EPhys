import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { RunComponent } from './run/run.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: 'run', component: RunComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'view', component: ViewComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
