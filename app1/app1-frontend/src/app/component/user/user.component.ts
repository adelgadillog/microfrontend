import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public title: string = 'Users';
  public users: User[] = [];
  public message;
  public tableHeader: string[] = ['#', 'Avatar', 'Name', 'Email'];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  public view(_id: number) {
    this.router.navigate([`/user/detail/${_id}`]);
  }

  public delete(_id: string) {
    this.userService.deleteUser(_id).subscribe((message) => {
      this.message = message;
      console.log(this.message);
    });
    this.loadUsers();
   
  }

  public loadUsers(){
    this.userService.getAllUser().subscribe((users) => {
      this.users = users;
     
    });
  }
}
