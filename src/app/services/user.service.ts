import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersKey = 'users';

  constructor() {
    if (!localStorage.getItem(this.usersKey)) {
      const initialUsers = [
        { name: 'John Doe', workoutType: 'Running', minutes: 30 },
        { name: 'Jane Smith', workoutType: 'Swimming', minutes: 45 },
        { name: 'Alice Johnson', workoutType: 'Cycling', minutes: 60 }
      ];
      localStorage.setItem(this.usersKey, JSON.stringify(initialUsers));
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }

  addUser(user: any) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
}

