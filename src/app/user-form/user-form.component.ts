import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../user';
import {SearchsService} from '../search-service/searchs.service';
import { Http, Response} from '@angular/http';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  providers: [ SearchsService],
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  newUser = new User (0, '', '');
  @Output() addUser = new EventEmitter<User>();
  submitUser() {
    this.addUser.emit(this.newUser);
}
  constructor(private searchsService: SearchsService, private http: Http) { }
  doSearch(term: string) {
    this.searchsService.search(term);
    }

  ngOnInit() {
  }

}
