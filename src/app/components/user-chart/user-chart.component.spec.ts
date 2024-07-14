import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserService } from '../../services/user.service';
import { UserChartComponent } from './user-chart.component';

describe('UserChartComponent', () => {
  let component: UserChartComponent;
  let fixture: ComponentFixture<UserChartComponent>;
  let userServiceStub: Partial<UserService>;

  beforeEach(async () => {
    userServiceStub = {
      getUsers: () => [],
    };

    await TestBed.configureTestingModule({
      imports: [NgxChartsModule],
      declarations: [UserChartComponent],
      providers: [{ provide: UserService, useValue: userServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load chart data on init', () => {
    component.ngOnInit();
    expect(component.single).toEqual([
      { name: 'John', value: 120 },
      { name: 'Jane', value: 150 },
    ]);
  });
});


