import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

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
