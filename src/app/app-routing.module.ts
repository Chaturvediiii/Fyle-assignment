import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserChartComponent } from './components/user-chart/user-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-input', pathMatch: 'full' },
  { path: 'user-input', component: UserInputComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-chart', component: UserChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,BrowserModule,ReactiveFormsModule,FormsModule]
})
export class AppRoutingModule { }

