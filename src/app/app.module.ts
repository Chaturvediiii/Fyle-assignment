import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UserChartComponent } from './components/user-chart/user-chart.component';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    UserTableComponent,
    UserSearchComponent,
    UserListComponent,
    UserFilterComponent,
    UserChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    NgxChartsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }



