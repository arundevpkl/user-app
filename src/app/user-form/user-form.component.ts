import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { USERS } from '../mock-user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() fromParent;

  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder) { }
  userForm = this.fb.group({
    name: ['',],
    email: [''],
    exp: ['',],
    avatar: [''],

  });
  title = 'user-app';
  users = USERS;
  selectedUser?: User;

  ngOnInit()  {
    console.log(this.fromParent);
   
  }
  closeModal(sendData) {
    this.activeModal.close(sendData);
    console.log(""+JSON.stringify(sendData));
  }

  onSubmit() {
    console.warn(this.userForm.value);

    console.log(""+JSON.stringify(this.users));
    this.closeModal(this.userForm.value);
  }

  

  onFileChanged(event) {
    const file = event.target.files[0];
    let image = URL.createObjectURL(event.target.files[0]);
    this.userForm.value.avatar=image;
  }

}