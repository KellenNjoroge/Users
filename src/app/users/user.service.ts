import { Injectable } from '@angular/core';
import {Users} from '../users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    getUsers() {
      return Users;
    }
  constructor() { }
}
