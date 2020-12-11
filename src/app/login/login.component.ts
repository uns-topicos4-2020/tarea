
import { Component, Inject, PLATFORM_ID, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  abueloNodo: Renderer2;
  papaNodo: ElementRef;
  private authService: AuthService;
  FormAuth: FormGroup;


  constructor(

    @Inject(PLATFORM_ID) private platformId,
    private _FormBuilder: FormBuilder,
    private rend2: Renderer2   //Permite asignar valores a los elementos del Doom
  ) { }

  onFocusMethod(element: ElementRef) {
    this.papaNodo = this.rend2.parentNode(element["target"]);  //Capturo al padre del elemento seleccionado
    this.abueloNodo = this.rend2.parentNode(this.papaNodo); //Capturo al abuelo del elemento seleccionado
    this.rend2.addClass(this.abueloNodo, "focus"); //Le añado la clase focus
  }

  onBlurMethod(element: ElementRef, value: String) {
    this.papaNodo = this.rend2.parentNode(element["target"]);
    this.abueloNodo = this.rend2.parentNode(this.papaNodo);
    if (value == "") {
      this.rend2.removeClass(this.abueloNodo, "focus");
    }
  }


  ngOnInit(): void {
    

    this.FormAuth = this._FormBuilder.group({
      user: [""],
      password: [""]
    })
    /*
    this.FormAuth = this._FormBuilder.group({
      user: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(20)]]
    })

  
    if (isPlatformBrowser(this.platformId)) {

    }
    if (isPlatformServer(this.platformId)) {

    }
  */

  }



  login() {
    //console.log(this.FormAuth.value);
    
    return this.authService.SignIn(this.FormAuth.value)
    .subscribe(
      data => {
        console.log(data)
      })
  

    /*
    Swal.fire({
      title: '¡SUCESS!',
      text: 'Usuario Correcto',
      icon: 'success',
      confirmButtonColor: '#38d39f',
    })
    */

    
 


    /*
    this._AuthService.SignIn(this.FormAuth.value).subscribe(ok => {

      
      Swal.fire({
        title: '¡SUCESS!',
        text: 'Usuario Correcto',
        icon: 'success',
        confirmButtonColor: '#38d39f',
      })


    }, err => {
      console.log(err)

      Swal.fire({
        title: '¡ERROR!',
        text: err.message,
        icon: 'error',
        confirmButtonColor: '#E54866',
      })

    })
    */
  }

}
