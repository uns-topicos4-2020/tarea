import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from '../services/users.service'
import * as $ from '../../../node_modules/admin-lte/plugins/jquery/jquery.js'



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {




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
