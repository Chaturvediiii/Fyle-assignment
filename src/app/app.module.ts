import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MaterialModule } from './material.module';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    UserTableComponent,
    UserSearchComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }



