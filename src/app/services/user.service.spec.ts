import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return users', () => {
    const users = service.getUsers();
    expect(users.length).toBe(3);
  });

  it('should add a new user', () => {
    service.addUser({ name: 'NewUser', workoutType: 'Jogging', minutes: 20 });
    const users = service.getUsers();
    expect(users.length).toBe(4);
    expect(users.find(user => user.name === 'NewUser')).toBeTruthy();
  });

  it('should add a workout to an existing user', () => {
    service.addUser({ name: 'John', workoutType: 'Jogging', minutes: 20 });
    const user = service.getUsers().find(u => u.name === 'John');
    expect(user?.workouts.length).toBe(2);
    expect(user?.totalMinutes).toBe(50);
  });

  it('should filter users by searchTerm', () => {
    const filteredUsers = service.filterUsers('Jane');
    expect(filteredUsers.length).toBe(1);
    expect(filteredUsers[0].name).toBe('Jane');
  });
});


