import { RestapicomponentService } from './../../services/restapicomponent.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private active: ActivatedRoute, private userService: RestapicomponentService) { }
  activePath: any

  selectedUser: any
  ngOnInit() {
    this.activePath = this.active.snapshot.paramMap.get("myid")
    console.log(this.activePath);
    this.getUser(this.activePath)
  }
  getUser(id) {
    this.userService.detailUser(id).subscribe((response) => {
      this.selectedUser = response
    })
  }


  } 
