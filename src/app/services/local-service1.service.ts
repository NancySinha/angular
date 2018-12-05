import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalService1Service {

sayHelloService1(){
 
  console.log("Service 1 function is called");
}
returnMessage()
{
 return("Hurray")
}

  constructor() { }
}
