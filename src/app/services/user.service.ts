import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      name: 'John',
      workouts: [{ workoutType: 'Running', minutes: 30 }],
      totalWorkoutTypes: 1,
      totalMinutes: 30
    },
    {
      name: 'Jane',
      workouts: [{ workoutType: 'Cycling', minutes: 45 }],
      totalWorkoutTypes: 1,
      totalMinutes: 45
    },
    {
      name: 'Doe',
      workouts: [{ workoutType: 'Swimming', minutes: 60 }],
      totalWorkoutTypes: 1,
      totalMinutes: 60
    }
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: { name: string, workoutType: string, minutes: number }) {
    const existingUser = this.users.find(u => u.name === user.name);
    if (existingUser) {
      existingUser.workouts.push({ workoutType: user.workoutType, minutes: user.minutes });
      existingUser.totalWorkoutTypes = existingUser.workouts.length;
      existingUser.totalMinutes += user.minutes;
    } else {
      this.users.push({
        name: user.name,
        workouts: [{ workoutType: user.workoutType, minutes: user.minutes }],
        totalWorkoutTypes: 1,
        totalMinutes: user.minutes
      });
    }
  }

  filterUsers(searchTerm: string): User[] {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
