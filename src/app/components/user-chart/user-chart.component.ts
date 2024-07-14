import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.css']
})
export class UserChartComponent implements OnInit {
  single: any[] = [];
  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Users';
  showYAxisLabel = true;
  yAxisLabel = 'Minutes';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    const users: User[] = this.userService.getUsers();
    this.single = users.map(user => ({
      name: user.name,
      value: user.totalMinutes
    }));
  }
}
