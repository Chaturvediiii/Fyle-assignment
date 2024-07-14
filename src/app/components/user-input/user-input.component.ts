import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  user = { name: '', workoutType: '', minutes: 0 };

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.addUser(this.user);
    this.user = { name: '', workoutType: '', minutes: 0 };
  }
}
