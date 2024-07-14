import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './user-input.component';
import { UserService } from '../../services/user.service';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['addUser']);

    await TestBed.configureTestingModule({
      declarations: [UserInputComponent],
      imports: [FormsModule],
      providers: [{ provide: UserService, useValue: userServiceSpy }],
    }).compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind user fields to input elements', () => {
    const nameInputElement = fixture.nativeElement.querySelector('input[name="name"]');
    const workoutTypeInputElement = fixture.nativeElement.querySelector('input[name="workoutType"]');
    const minutesInputElement = fixture.nativeElement.querySelector('input[name="minutes"]');

    nameInputElement.value = 'John';
    workoutTypeInputElement.value = 'Running';
    minutesInputElement.value = '30';

    nameInputElement.dispatchEvent(new Event('input'));
    workoutTypeInputElement.dispatchEvent(new Event('input'));
    minutesInputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.user.name).toBe('John');
    expect(component.user.workoutType).toBe('Running');
    expect(component.user.minutes).toBe(30);
  });

  it('should call addUser method on UserService when addUser is called', () => {
    component.user = { name: 'Jane', workoutType: 'Cycling', minutes: 45 };
    component.addUser();
    expect(userService.addUser).toHaveBeenCalledWith({ name: 'Jane', workoutType: 'Cycling', minutes: 45 });
  });

  it('should reset user fields after adding a user', () => {
    component.user = { name: 'Jane', workoutType: 'Cycling', minutes: 45 };
    component.addUser();
    expect(component.user).toEqual({ name: '', workoutType: '', minutes: 0 });
  });
});


