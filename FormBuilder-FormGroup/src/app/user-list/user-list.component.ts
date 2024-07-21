import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }

  addUser() {
    this.selectedUser = {};
  }

  onFormSubmit(user: any) {
    if (user.id) {
      this.userService.updateUser(user).subscribe(() => this.loadUsers());
    } else {
      this.userService.addUser(user).subscribe(() => this.loadUsers());
    }
    this.selectedUser = null;
  }
}
