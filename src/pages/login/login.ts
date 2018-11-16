import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {CarritoProvider} from "../../providers/carrito/carrito";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  correo:string="";
  contrasena:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewctrl: ViewController, public _us:UsuarioProvider,
              public _cs:CarritoProvider ) {
  }

  ingresar(){
    this._us.ingresar(this.correo,this.contrasena).subscribe(()=>{
      this._cs.ver_carrito();
    });
  }
}
