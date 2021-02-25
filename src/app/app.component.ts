import { Component } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder) { }
  userForm = this.fb.group({
    name: ['',],
    email: [''],
    exp: ['',],
    avatar: [''],

  });
  title = 'user-app';
  users = USERS;
  selectedUser?: User;
  
  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.userForm.value);
    this.users.push(this.userForm.value);
    console.log(""+JSON.stringify(this.users));
  }

  removeUser(user:Object,index:any){
     this.users.splice(index,1);
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    let image = URL.createObjectURL(event.target.files[0]);
    this.userForm.value.avatar=image;
  }
}
