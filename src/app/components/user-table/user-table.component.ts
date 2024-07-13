import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '.././../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['name', 'workoutType', 'minutes'];
  users = new MatTableDataSource<any>();
  totalUsers = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() searchTerm: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
    this.users.paginator = this.paginator;
  }

  ngOnChanges() {
    this.applyFilter();
  }

  loadUsers() {
    const users = this.userService.getUsers();
    this.users.data = users;
    this.totalUsers = users.length;
  }

  applyFilter() {
    this.users.filter = this.searchTerm.trim().toLowerCase();
  }
}
