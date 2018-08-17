import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {UserService} from '../users/user.service';
import { User } from '../user';
import {HttpClient} from '@angular/common/http';
import {Repo} from '../repo-class/repo';
import {RepoRequestService} from '../repo-http/repo-request.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService, RepoRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = Users;
  repo: Repo;
  users: User[];
  constructor(userService: UserService, private http: HttpClient, private repoService: RepoRequestService)  {
  this.users = userService.getUsers();
   }
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
    this.repoService.repoRequest();
    this.repo = this.repoService.repo;
  }

}
