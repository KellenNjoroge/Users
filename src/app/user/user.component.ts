import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {UserService} from '../users/user.service';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = Users;
  users: User[];
  constructor(userService: UserService) {
  this.users = userService.getUsers();
   }
  // users = [
  //   new User(1, 'Kellen', '30 repositories so far'),
  // ];
  toogleDetails(index) {
    this.users[index].showDescription = !this.users[index].showDescription;
}
addNewUser(user) {
  const userLength = this.users.length;
  user.id = userLength + 1;
  this.users.push(user);

}
  // tslint:disable-next-line:member-ordering

  ngOnInit() {
  }

}
