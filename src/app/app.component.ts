import { Component } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-user';
import { FormBuilder } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from "./user-form/user-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modalService: NgbModal,private fb: FormBuilder) { }
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

  openModal() {
    const modalRef = this.modalService.open(UserFormComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });

    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log( "done"+JSON.stringify(result));
      this.users.push(result)
    }, (reason) => {
    });
  }

  removeUser(user:Object,index:any){
    this.users.splice(index,1);
 }
 onFileChanged(event) {
  const file = event.target.files[0];
  let image = URL.createObjectURL(event.target.files[0]);
  this.userForm.value.avatar=image;
}

  onSubmit() {
    console.warn(this.userForm.value);
    this.users.push(this.userForm.value);
    console.log(""+JSON.stringify(this.users));
  }

 
}
