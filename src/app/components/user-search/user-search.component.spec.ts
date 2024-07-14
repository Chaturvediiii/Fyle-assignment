import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSearchComponent } from './user-search.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchComponent ],
      imports: [ FormsModule ], // Add FormsModule to the imports array
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind searchTerm to input field', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    const testValue = 'test search';

    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.searchTerm).toBe(testValue);
  });

  it('should emit search event with searchTerm', () => {
    spyOn(component.search, 'emit');

    const testValue = 'test search';
    component.searchTerm = testValue;
    component.onSearch();

    expect(component.search.emit).toHaveBeenCalledWith(testValue);
  });
});

