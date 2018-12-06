import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestapicomponentService {

    constructor(private http:HttpClient) {
  }
    getRemoteuser(){
        return this.http.get("http://localhost:3000/users")
    }
  getAllproducts(){
    return this.http.get("http://localhost:3000/products" )
  }
  
createUser(user){
return this.http.post("http://localhost:3000/users",user)
}
DeleteUser(id){
  return this.http.delete("http://localhost:3000/users"+id)
}
detailUser(id){
    return this.http.get("http://localhost:3000/users/"+id)
  } 
 
}
