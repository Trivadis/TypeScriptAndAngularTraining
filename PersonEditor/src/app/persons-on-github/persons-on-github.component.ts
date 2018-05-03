import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import { Person } from '../model/person';
import { PersonService } from '../person.service';

@Component({
    moduleId: module.id,
    templateUrl: 'persons-on-github.Component.html'
})
export class PersonsOnGithubComponent implements OnInit {
    pageTitle = 'Developers';
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
        this.loadGithubUser().subscribe(
            user => this.myuser = user as GithubUser,
            error => this.errorMessage = <any>error
        );

        this.loadGithubUserRepos().subscribe(
            repos => this.myrepos = repos as GithubRepo[],
            error => this.errorMessage = <any>error
        );
    }

    loadGithubUser() {
        return this._http.get('https://api.github.com/users/' + this.currentUser)
            .map(res => res.json() as GithubUser)
            .catch(e => this.handleError(e));
    }

    loadGithubUserRepos() {
        return this._http.get('https://api.github.com/users/' + this.currentUser + '/repos')
            .map(res => res.json() as GithubRepo[])
            .catch(e => this.handleError(e));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
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
