import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public title: string = 'User details: ';
  public user: User;
  public _id: number;
  public tableHeader: string[] = [
    'Avatar',
    'Name',
    'Email'
  ];
  constructor(
    private actRoute: ActivatedRoute,
    private userService: UserService
  ) { 

    this._id =
      this.actRoute.snapshot.params._id;
  }

  ngOnInit(): void {
    this.userService.getUser(this._id).subscribe((user)=>{
      this.user = user;
    })
  }

}
