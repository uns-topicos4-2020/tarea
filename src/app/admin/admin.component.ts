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

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  Users: Array<UserModel> = Array<UserModel>();
  constructor(private _UsersService: UsersService) { }

  ngOnInit() {
    this._UsersService.Users().subscribe(ok => {
      console.log(ok)
    }, err => {
      console.log(err)
    })
  }
  ngOnDestroy() {
  }

}
