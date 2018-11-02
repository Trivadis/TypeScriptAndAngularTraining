import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubService {
  constructor(private _http: HttpClient) {}

  loadGithubUser(currentUser) {
    return this._http.get('https://api.github.com/users/' + currentUser);
  }

  loadGithubUserRepos(currentUser) {
    return this._http.get('https://api.github.com/users/' + currentUser + '/repos');
  }
}
