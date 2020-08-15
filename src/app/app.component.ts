import { User } from './task-list/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task'
  uppertext:string = 'asdandad hajkdhajkd ghjadg asjd gajsd'
  lowertext:string = 'KLASHUAD HJAHDSJK KHAJSD  HKJASDHK'
  percentValue:number = 0.5; 
  dateValue:Date = new Date();
  money : number = 589;
  isAdmin2:boolean = false;
  profile:number=8;
  user: User = {
    name:'Bob',
    age:25
  }
 }


