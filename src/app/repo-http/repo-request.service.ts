import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Repo} from '../../repo-class/repo';
@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  constructor() { }
}
