import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Person} from './../../model/person';
import {PersonDetailComponent} from './../allPersons/person-detail.component';
import {PersonService} from './../../services/person.service';
import {Router} from '@angular/router';


@Component(
    {
        selector:'persons-on-github',
        template: `
         <h2>Developers</h2>
         <ul class="list-group">
           <li class="list-group-item"
           [class.active]="person.githubaccount===currentUser"
            *ngFor="let person of personList"
             (click)="onLoadGithubDetails(person)">{{person.firstname}} (Github: {{person.githubaccount}})</li>
         </ul>
        
         
        <div *ngIf="myuser"> 
             <div>
                <img class="img-rounded" [src]="myuser?.avatar_url" width="200" height="200"/>
              </div>
            <div>
            {{errorMessage}}
            </div>
            
            <table class="table-striped">
            <thead>
                <tr>
                    <th>Repository</th><th>Language</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let repo of myrepos">
                    <td>{{repo.name}}</td><td>{{repo.language}}</td>
                </tr>
            </tbody>
            </table>
         </div>
     `
   
    }
)
export class PersonsOnGithubComponent implements OnInit{
    
    personList:Person[]
    
  myuser:GithubUser;
  myrepos:GithubRepo[];
  currentUser:string;
  errorMessage:string;
    
    constructor(
        private _personService:PersonService,
        private _http:Http)    {
    }
    
    ngOnInit(){
        this._personService.getPersonsWithGithubAccount().subscribe(res=>this.personList = res);
    }
 
 onLoadGithubDetails(person:Person){
   this.currentUser = person.githubaccount;
     this.loadGithubUser()
     .subscribe(user=>{this.myuser = user as GithubUser},
     error=> this.errorMessage = <any>error);
     
     this.loadGithubUserRepos()
     .subscribe(repos => this.myrepos = repos as GithubRepo[],
     error=> this.errorMessage = <any>error);
 }
 
 loadGithubUser()
 {
    return this._http.get('https://api.github.com/users/'+this.currentUser)
     .map(res=> <GithubUser> res.json());
    //  .catch(this.handleError);
 }
 
  loadGithubUserRepos()
 {
    return this._http.get('https://api.github.com/users/'+this.currentUser+'/repos')
     .map(res=> <GithubRepo[]> res.json());
    //  .catch(this.handleError);
 }
 
//  private handleError (error: Response) {
//     // in a real world app, we may send the server to some remote logging infrastructure
//     // instead of just logging it to the console
//     console.error(error);
//     return Observable.throw(error.json().error || 'Server error');
//   }
}

interface GithubUser{
    login:string;
    avatar_url:string;
    repos_url:string;
} 
interface GithubRepo{
    name:string;
    language:string;
} 