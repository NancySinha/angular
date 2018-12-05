import { RestapicomponentService } from './../../services/restapicomponent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templelete',
  templateUrl: './templelete.component.html',
  styleUrls: ['./templelete.component.css']
})
export class TempleleteComponent implements OnInit {
myForm:any
  constructor(private userservice:RestapicomponentService) { }

  ngOnInit() {
   
  
  }
   addFormUser(user){
     console.log(user)
     this.userservice.createUser(user).subscribe(response => console.log(response))
   }

}
