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
    this.repo = new Repo('', '');
  }
  repoRequest() {

    interface ApiResponse {
        name: any;
        location: any;

    }
    const promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
            this.repo.name = response.name;
            this.repo.location = response.location;

            resolve();
        },
        error => {
                this.repo.name = 'Kellen_Njoroge.';
                this.repo.location = 'Nairobi_Kenya';
                reject(error);
            }
        );
    });

    return promise;
  }
}

