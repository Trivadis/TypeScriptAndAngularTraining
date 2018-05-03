import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`.active{
     background-color:green;
  }`],
  template: `<h1>Size of red rectangle is {{width}}px</h1>
            <div>Type in the size</div>
            <input type="text" [(ngModel)]="width">
            <div style="height:50px;background-color:red;" [style.width.px]="width" ></div>`
            
})
export class AppComponent {
  width: number = 100;
}