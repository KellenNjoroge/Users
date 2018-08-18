import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repo} from '../repo-class/repo';
import {RepoRequestService} from '../repo-http/repo-request.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [RepoRequestService],
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit {
  repo: Repo;
  constructor(private http: HttpClient, private repoService: RepoRequestService)  {
     }
  ngOnInit() {
    this.repoService.repoRequest();
    this.repo = this.repoService.repo;
  }
}
