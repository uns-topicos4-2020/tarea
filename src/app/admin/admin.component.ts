import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {


  constructor(@Inject(PLATFORM_ID) private platformId) { }

  ngOnInit() {

    if(isPlatformBrowser(this.platformId)) {

    }
    if(isPlatformServer(this.platformId)) {
     
    }

  }
  ngOnDestroy() {
  }

}
