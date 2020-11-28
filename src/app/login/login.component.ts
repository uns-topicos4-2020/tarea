
import { Component, ElementRef, OnInit, Renderer2} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
 
  abueloNodo: Renderer2;
  papaNodo: ElementRef;
  User: any = {usernameInput: null,passwordInput: null};
  valueUsername: String;
  valuePassword: String;
  

  constructor(
    private rend2: Renderer2   //Permite asignar valores a los elementos del Doom
  ) { }

  ngOnInit(): void {
    
    
  }

  /*
  eventFocus(){
    //console.log(this.InputPersonalizado.nativeElement);
    
    this.rend2.addClass(this.InputPersonalizado.nativeElement,"focus");  //Añade la clase focus el InputPersonlizado 
  }
  */

 onFocusMethod(element: ElementRef){
  //console.log(element["target"]);  //Obtengo el elemento Seleccionado
  this.papaNodo = this.rend2.parentNode(element["target"]);  //Capturo al padre del elemento seleccionado
  this.abueloNodo = this.rend2.parentNode(this.papaNodo); //Capturo al abuelo del elemento seleccionado
  this.rend2.addClass(this.abueloNodo,"focus"); //Le añado la clase focus
 }

  onBlurMethod(element: ElementRef){
    console.log(element["target"]); 
    this.papaNodo = this.rend2.parentNode(element["target"]);
    this.abueloNodo = this.rend2.parentNode(this.papaNodo);
    this.rend2.removeClass(this.abueloNodo,"focus");
  }

  

}
