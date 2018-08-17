import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = Users;
  // users = [
  //   new User(1, 'Kellen', '30 repositories so far'),
  // ];
  toogleDetails(index) {
    this.users[index].showDescription = !this.users[index].showDescription;
}
  constructor() { }

  ngOnInit() {
  }

}
