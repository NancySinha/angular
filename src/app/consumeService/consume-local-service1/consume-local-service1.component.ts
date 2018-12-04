import { Component, OnInit } from '@angular/core';
import {LocalService1Service} from 'src/app/services/local-service1.service';
@Component({
  selector: 'app-consume-local-service1',
  templateUrl: './consume-local-service1.component.html',
  styleUrls: ['./consume-local-service1.component.css']
})
export class ConsumeLocalService1Component implements OnInit {
myMessage=""
  constructor(private localService:LocalService1Service) { }

  ngOnInit() {
    this.localService.sayHelloService1()
    this.myMessage=this.localService.returnMessage()
  }

}
