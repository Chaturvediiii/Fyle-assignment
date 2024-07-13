import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-input', pathMatch: 'full' },
  { path: 'user-input', component: UserInputComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

