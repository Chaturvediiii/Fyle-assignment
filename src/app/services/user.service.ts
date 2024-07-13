import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { name: 'John', workoutType: 'Running', minutes: 30 },
    { name: 'Jane', workoutType: 'Cycling', minutes: 45 },
    { name: 'Doe', workoutType: 'Swimming', minutes: 60 }
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  filterUsers(searchTerm: string): User[] {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}


