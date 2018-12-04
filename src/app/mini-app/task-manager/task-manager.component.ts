import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  counter = 0;
  salary = 90;
  mydate = new Date();
friends = ['nancy','parul','trpti','karishma','juhi']
number=['11','18','14','15','21','43']  
  myTasks = [
    'Go and Buy a dress',
    'Plan Your Birthday',
    'unWrap the gifts',
    'Go to some place'
  ]
  mycompletedTask = [];
  constructor() { }

  ngOnInit() {
  }
  sayhello = function () {
    ++this.counter
    console.log("Button clicked" + this.counter)
    this.myTasks.push(this.oneTask)
    this.oneTask = ""
  }
  taskDone(currentTask) {
    console.log("Index value" + currentTask);
    this.mycompletedTask.push(this.myTasks[currentTask])
    this.myTasks.splice(currentTask, 1)
  }
}
