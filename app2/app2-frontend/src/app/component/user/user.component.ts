import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public userForm;
  public title: string = 'Create User';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.userForm = this.formBuilder.group({
      name: '',
      email: '',
    });
  }

  onSubmit(userData:User) {
    this.userService.postUser(userData).subscribe((user)=>{
      if(user.email){
        console.log("Succes");
      }
    })
    this.createForm();
  }
}
