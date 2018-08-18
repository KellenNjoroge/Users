import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Repo} from '../repo-class/repo';
@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  repo: Repo;
  constructor(private http: HttpClient) {
    this.repo = new Repo('', '', '', '');
  }
  repoRequest() {

    interface ApiResponse {
        name: any;
        id: any;
        avatar_url: any;
        repos_url: any;

    }
    const promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
            this.repo.name = response.name;
            this.repo.id = response.id;
            this.repo.avatar_url = response.avatar_url;
            this.repo.repos_url = response.repos_url;
            resolve();
        },
        error => {
                this.repo.name = 'Kellen_Njoroge.';
                this.repo.id = '';
                this.repo.avatar_url = '';
                this.repo.repos_url = '';

                reject(error);
            }
        );
    });

    return promise;
  }
}

