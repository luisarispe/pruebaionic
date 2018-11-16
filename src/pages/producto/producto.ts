import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarritoProvider} from "../../providers/index.services";

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  producto:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public _cs:CarritoProvider) {
    this.producto= this.navParams.get("producto");
  }
  guardar_carrito(producto:any){
    //console.log(producto);
    this._cs.agregar_carrito(producto);
  }


}
