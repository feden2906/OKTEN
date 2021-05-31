import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../models/user";
import  {UserService} from "../../services/user.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // private httpClient: HttpClient;
  public users: IUser[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
this.userService.getUsers().subscribe(value => {
  console.log(value);
  this.users = value;
});
  }

}
