import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  searchTerm: string = '';

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}

