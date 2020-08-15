import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {

  tasks = [];
  task = "";
  isAdmin:boolean = true;
  add():void{
    if(this.task != ""){
      this.tasks.push(this.task);
      this.task = "";
    }

  }

}
