import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() addUser = new EventEmitter<any>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      users: this.fb.array([])
    });
  }

  get users(): FormArray {
    return this.userForm.get('users') as FormArray;
  }

  addUserToForm() {
    this.users.push(this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }));
  }

  removeUser(index: number) {
    this.users.removeAt(index);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.addUser.emit(this.userForm.value);
      this.userForm.reset();
    }
  }
}
