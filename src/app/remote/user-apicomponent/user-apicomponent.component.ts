import { Component, OnInit } from '@angular/core';
import { RestapicomponentService } from './../../services/restapicomponent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-apicomponent',
  templateUrl: './user-apicomponent.component.html',
  styleUrls: ['./user-apicomponent.component.css']
})
export class UserApicomponentComponent implements OnInit {
  allUsers: any
  constructor(private userServices: RestapicomponentService, private router: Router) { }

  ngOnInit() {
    this.getApiData()
  }

  getApiData() {
    this.userServices.getRemoteuser().subscribe((data) => {
      console.log(data)
      this.allUsers = data
      console.log(this.allUsers)
    })
  }
  user = {
    "name": "Nancy",
    "email": "nancy@gmail.com"

  }

  postUser() {
    this.userServices.createUser(this.user)
  }
  viewDetail(id) {
    console.log(id)
    this.router.navigate(["/remoteData", id])//this will navigate to remote/id
  }

  delete(id) {
    this.userServices.DeleteUser(id).subscribe((response) => {
      this.userServices.getRemoteuser().subscribe((data) => {
        this.allUsers = data
      })
    })
  }

}