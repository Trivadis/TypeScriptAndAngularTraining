// export class Person
// {
//     constructor(
//        public id:number,
//        public firstname:string,
//        public lastname?:string,
//        public githubaccount?:string){
//     }
// }

export interface Person {
    id: number;
    firstname: string;
    lastname?: string;
    githubaccount?: string;
}