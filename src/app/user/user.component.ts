import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {UserService} from '../users/user.service';
import { User } from '../user';
import {SearchsService} from '../search-service/searchs.service';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService, SearchsService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = Users;
  users: User[];
  constructor(userService: UserService,  private searchsService: SearchsService, private http: Http )  {
  this.users = userService.getUsers();
}
doSearch(term: string) {
this.searchsService.search(term);
}

// tslint:disable-next-line:member-ordering

ngOnInit() {
}

}

//   toogleDetails(index) {
//     this.users[index].showDescription = !this.users[index].showDescription;
// }
  // addNewUser(user) {
  // const userLength = this.users.length;
  // user.id = userLength + 1;
  // this.users.push(user);

  // }
