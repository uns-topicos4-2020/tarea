
import { Component, Inject, PLATFORM_ID, ElementRef, OnInit, Renderer2} from '@angular/core';
import { AuthService } from '../services/auth.service'
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
 
  abueloNodo: Renderer2;
  papaNodo: ElementRef;

  FormAuth: FormGroup
 

  constructor(
    private _AuthService:AuthService,
    @Inject(PLATFORM_ID) private platformId, 
    private _FormBuilder: FormBuilder,
    private rend2: Renderer2,   //Permite asignar valores a los elementos del Doom
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this.FormAuth = this._FormBuilder.group({
      user: ["normal_user", [Validators.required]],
      password: ["ya|no|me|acuerdo", [Validators.required, Validators.minLength(8)]]
    })
    if(isPlatformBrowser(this.platformId)) {

    }
    if(isPlatformServer(this.platformId)) {
     
    }
    
    
  }



 onFocusMethod(element: ElementRef){
  this.papaNodo = this.rend2.parentNode(element["target"]);  //Capturo al padre del elemento seleccionado
  this.abueloNodo = this.rend2.parentNode(this.papaNodo); //Capturo al abuelo del elemento seleccionado
  this.rend2.addClass(this.abueloNodo,"focus"); //Le añado la clase focus
 }

  onBlurMethod(element: ElementRef, value: String){
    this.papaNodo = this.rend2.parentNode(element["target"]);
    this.abueloNodo = this.rend2.parentNode(this.papaNodo);
    if (value == ""){
      this.rend2.removeClass(this.abueloNodo,"focus");
    }
  }

  login() {
   
    this._AuthService.SignIn(this.FormAuth.value).subscribe(ok => {
      console.log("ok: ", ok)
      this._Router.navigateByUrl("/admin")
    }, err => {
      console.log(err)

      Swal.fire({
        title: '¡ERROR!',
        text: err.message,
        icon: 'error',
        confirmButtonColor: '#E54866',
      })

    })
  }

}
