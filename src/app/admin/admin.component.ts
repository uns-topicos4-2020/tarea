import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from '../services/users.service'

<<<<<<< HEAD

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

=======
declare const $:any;
>>>>>>> a1712a1d6db7f7a55926043e0ba5bdc13ec80880
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
<<<<<<< HEAD
  Users: Array<UserModel> = Array<UserModel>();
=======




>>>>>>> a1712a1d6db7f7a55926043e0ba5bdc13ec80880
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
