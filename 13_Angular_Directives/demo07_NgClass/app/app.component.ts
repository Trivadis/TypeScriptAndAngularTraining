import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<input type="text" [ngClass]="getMyClasses()" value="Hello" #myInput>
           <div>
             Classes set on input: {{myInput.className}}
           </div>
            `,
  styles:[`
  .isActive{
    background-color:black;
    color:white;
  }
  .isSelected{
    font-weight:bold;
  }
  
  `]
})
export class AppComponent {
  getMyClasses()
  {
    let classes=
    {
      "isActive":"true",
      "isSelected":"true"
    };
    return classes;
  }
}


