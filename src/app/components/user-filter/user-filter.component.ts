import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent {
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga']; // Add your workout types here
  selectedWorkoutType: string = '';

  @Output() filter = new EventEmitter<string>();

  onFilter() {
    this.filter.emit(this.selectedWorkoutType);
  }
}

