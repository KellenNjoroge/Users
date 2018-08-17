import { Injectable } from '@angular/core';
import {Users} from '../users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    get Users() {
      return Users;
    }
  constructor() { }
}
