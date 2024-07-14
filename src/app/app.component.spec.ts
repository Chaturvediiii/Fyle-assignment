import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'health-challenge-tracker'`, () => {
    expect(component.title).toEqual('health-challenge-tracker');
  });

  it('should update searchTerm when onSearch is called', () => {
    const searchTerm = 'John';
    component.onSearch(searchTerm);
    expect(component.searchTerm).toEqual(searchTerm);
  });
});


