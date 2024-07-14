import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTableComponent } from './user-table.component';
import { UserService } from '../../services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers', 'filterUsers']);

    await TestBed.configureTestingModule({
      declarations: [UserTableComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;

    // Mock user data
    userService.getUsers.and.returnValue([]);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    component.ngOnInit();
    expect(userService.getUsers).toHaveBeenCalled();
    expect(component.users.data.length).toBe(2);
  });

  it('should apply filter based on searchTerm', () => {
    component.ngOnInit();
    component.searchTerm = 'John';
    component.applyFilter();
    expect(component.users.data.length).toBe(1);
  });

  it('should filter users based on selectedWorkoutType', () => {
    component.ngOnInit();
    component.selectedWorkoutType = 'Running';
    component.applyFilter();
    expect(component.users.data.length).toBe(1);
  });

  it('should update totalUsers correctly', () => {
    component.ngOnInit();
    expect(component.totalUsers).toBe(2);
    component.searchTerm = 'John';
    component.applyFilter();
    expect(component.totalUsers).toBe(1);
  });

  it('should call applyFilter on changes', () => {
    spyOn(component, 'applyFilter');
    component.ngOnChanges();
    expect(component.applyFilter).toHaveBeenCalled();
  });
});

