import { Component, OnInit } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = [
    new User(1, 'Kellen', '30 repositories so far'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
