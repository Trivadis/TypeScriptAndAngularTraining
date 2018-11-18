import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { GithubRepo } from './../../models/github-repo';
import { GithubUser } from './../../models/github-user';
import { Person } from './../../models/person';
import { GithubService } from './../../services/github.service';
import { PersonService } from './../../services/person.service';

@Component({
  templateUrl: './persons-on-github.Component.html'
})
export class PersonsOnGithubComponent implements OnInit {
  pageTitle = 'Developers';
  personList: Person[] = [];

  myuser: GithubUser;
  myrepos: GithubRepo[];
  currentUser: string;
  errorMessage: string;

  constructor(private _personService: PersonService, private _githubService: GithubService) {}

  ngOnInit() {
    this._personService.getPersonsWithGithubAccount().subscribe(res => (this.personList = res));
  }

  onLoadGithubDetails(person: Person) {
    this.currentUser = person.githubaccount;
    this._githubService
      .loadGithubUser(person.githubaccount)
      .pipe(catchError(error => (this.errorMessage = <any>error)))
      .subscribe(user => (this.myuser = user as GithubUser));

    this._githubService
      .loadGithubUserRepos(person.githubaccount)
      .pipe(catchError(error => (this.errorMessage = <any>error)))
      .subscribe(repos => (this.myrepos = repos as GithubRepo[]));
  }
}
