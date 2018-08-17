import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {UserService} from '../users/user.service';
import { User } from '../user';
import {HttpClient} from '@angular/common/http';
import {Repo} from '../repo-class/repo';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = Users;
  repo: Repo;
  users: User[];
  constructor(userService: UserService, private http: HttpClient) {
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
    interface ApiResponse {
        name: any;
        location: any;
    }
    // tslint:disable-next-line:max-line-length
    this.http.get<ApiResponse>('https://api.github.com/users/KellenNjoroge?access_token=ed1ef4560933cae249b21bf58136daf47b546069').subscribe(data => {
      this.repo = new Repo(data.name, data.location);
        // Successful API request.
    }, err => {
      this.repo = new Repo('Kellen_Njoroge', 'Nairobi_Kenya');
      console.log('Error occured ');
  });
  }

}
