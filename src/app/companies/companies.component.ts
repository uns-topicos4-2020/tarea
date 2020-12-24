import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CompaniesService } from '../services/companies.service'
declare const $:any;
interface Company {
  admanager_order_id: String;
  company_id: String;
  name: String;
  rubro: String;
  user_id: String;
  web: String;
}
class Company implements Company {
  admanager_order_id: String = "";
  company_id: String = "";
  name: String = "";
  rubro: String = "";
  user_id: String = "";
  web: String = "";
}

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  @ViewChild("ExitModal", {static: true, read: ElementRef}) ExitModal:ElementRef
  Companies: Array<Company> = Array<Company>();
  addCompanyGroup: FormGroup
  editCompanyGroup: FormGroup

  constructor(private _CompaniesService: CompaniesService,
    private _Renderer2: Renderer2,
    private _FormBuilder: FormBuilder,
    @Inject(PLATFORM_ID) private platformId) { }

  ngOnInit() {


    this.addCompanyGroup = this._FormBuilder.group({
      user_id: ["", [Validators.required]],
      company_id: ["", [Validators.required]],
      name: ["charapito", [Validators.required]],
      web: ["charca.pe", [Validators.required]],
      rubro: ["TI", [Validators.required]],
      admanager_order_id: ["8678", [Validators.required, Validators.pattern("(0-9)")]]
    })
    this.editCompanyGroup = this._FormBuilder.group({
      user_id: ["", [Validators.required]],
      company_id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      web: ["", [Validators.required]],
      rubro: ["", [Validators.required]],
      admanager_order_id: ["", [Validators.required, Validators.pattern("(0-9)")]]
    })


    if (isPlatformBrowser(this.platformId)) {

    }
    if (isPlatformServer(this.platformId)) {

    }
    this.refreshDataTable()

  }
  async event(ev, data) {
    try {
      if (ev === "create") {
        this.addCompanyGroup.controls["user_id"].setValue(this.addCompanyGroup.controls["name"].value)
        this.addCompanyGroup.controls["company_id"].setValue(this.addCompanyGroup.controls["web"].value)
        this._CompaniesService.Create(this.addCompanyGroup.value).subscribe(this.refreshDataTable)
      } else if (ev === "update") {
        this._CompaniesService.Update(this.editCompanyGroup.value["company_id"], this.editCompanyGroup.value).subscribe(this.refreshDataTable)
      } else if (ev === "deleteOne") { 
        this._CompaniesService.Delete(this.addCompanyGroup.value["company_id"], this.addCompanyGroup.value).subscribe(this.refreshDataTable)
      } else if (ev === "delete") {
        this._CompaniesService.Delete().subscribe(this.refreshDataTable)
      } else { }
      $("#addEmployeeModal").modal('hide');
      $("#editEmployeeModal").modal('hide');
      $("#deleteEmployeeModal").modal('hide');
      this.addCompanyGroup.reset()
      this.editCompanyGroup.reset()
      
    } catch (error) {
      
    }
  }

  private refreshDataTable = (result?:any) => {
    this._CompaniesService.Read().subscribe(data => this.Companies = data)
  }
  
}
