import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from './../../model/person';
import { PersonDetailComponent } from './../allPersons/person-detail.component';
import { PersonService } from './../../services/person.service';
import { Router } from '@angular/router';

@Component(
    {
        moduleId: module.id,
        selector: 'persons-on-github',
        templateUrl: 'persons-on-github.Component.html'
    }
)
export class PersonsOnGithubComponent implements OnInit {
    pageTitle:string = "Developers"
    personList: Person[] = [];

    myuser: GithubUser;
    myrepos: GithubRepo[];
    currentUser: string;
    errorMessage: string;

    constructor(
        private _personService: PersonService,
        private _http: Http) {
    }

    ngOnInit() {
        this._personService.getPersonsWithGithubAccount().subscribe(res => this.personList.push(res));
    }

    onLoadGithubDetails(person: Person) {
        this.currentUser = person.githubaccount;
        this.loadGithubUser()
            .subscribe(
                user => { this.myuser = user as GithubUser },
                error => this.errorMessage = <any>error
            );

        this.loadGithubUserRepos()
            .subscribe(
                repos => this.myrepos = repos as GithubRepo[],
                error => this.errorMessage = <any>error
            );
    }

    loadGithubUser() {
        return this._http.get('https://api.github.com/users/' + this.currentUser)
            .map(res => <GithubUser>res.json());
        //  .catch(this.handleError);
    }

    loadGithubUserRepos() {
        return this._http.get('https://api.github.com/users/' + this.currentUser + '/repos')
            .map(res => <GithubRepo[]>res.json());
        //  .catch(this.handleError);
    }

    //  private handleError (error: Response) {
    //     // in a real world app, we may send the server to some remote logging infrastructure
    //     // instead of just logging it to the console
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    //   }
}

interface GithubUser {
    login: string;
    avatar_url: string;
    repos_url: string;
}
interface GithubRepo {
    name: string;
    language: string;
} 