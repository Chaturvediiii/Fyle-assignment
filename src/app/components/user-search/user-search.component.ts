import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}



