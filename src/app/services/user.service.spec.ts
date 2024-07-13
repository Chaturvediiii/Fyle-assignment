// user.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial users', () => {
    expect(service.getUsers().length).toBe(3);
  });

  it('should add a user', () => {
    const newUser = { name: 'New User', workoutType: 'Yoga', minutes: 20 };
    service.addUser(newUser);
    expect(service.getUsers().length).toBe(4);
  });
});

