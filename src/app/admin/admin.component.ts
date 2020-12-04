import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from '../services/users.service'


class UserModel implements UserModel {
  "id": any;
  "createdAt": String;
  "name": String;
  "avatar": String;
  "role": {
      "__request_id": any,
      "Transaction": [],
      "Coupon": [],
      "user": String,
      "passsword": String
  }

}

interface UserModel {
"id": any;
"createdAt": String;
"name": String;
"avatar": String;
"role": {
    "__request_id": any,
    "Transaction": [],
    "Coupon": [],
    "user": String,
    "passsword": String
}

}

declare const $:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  Users: Array<UserModel> = Array<UserModel>();




  constructor(private _UsersService: UsersService) { }

  ngOnInit() {

    $(document).ready(function(){
      // Activate tooltip
      $('[data-toggle="tooltip"]').tooltip();
      
      // Select/Deselect checkboxes
      var checkbox = $('table tbody input[type="checkbox"]');
      $("#selectAll").click(function(){
        if(this.checked){
          checkbox.each(function(){
            this.checked = true;                        
          });
        } else{
          checkbox.each(function(){
            this.checked = false;                        
          });
        } 
      });
      checkbox.click(function(){
        if(!this.checked){
          $("#selectAll").prop("checked", false);
        }
      });
    });

    this._UsersService.Users().subscribe(ok => {
      console.log(ok)
    }, err => {
      console.log(err)
    })
  }
  ngOnDestroy() {
  }

}
