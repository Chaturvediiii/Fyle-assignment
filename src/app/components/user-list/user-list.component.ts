import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  searchTerm: string = '';
  selectedWorkoutType: string = '';

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  onFilter(selectedWorkoutType: string) {
    this.selectedWorkoutType = selectedWorkoutType;
  }
}


