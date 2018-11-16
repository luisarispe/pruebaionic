import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductosProvider} from "../../providers/productos/productos";
import {ProductoPage} from "../index.paginas";
import {CarritoProvider} from "../../providers/index.services";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,
              public _ps:ProductosProvider,
              public _cs:CarritoProvider ) {

  }
  siguiente_pagina(infiniteScroll){
    this._ps.cargar_todos().then(()=>{

      infiniteScroll.complete();
    }).catch( e => {
     infiniteScroll.complete();
   });
  }
  mostrar_producto(producto:any){
  this.navCtrl.push(ProductoPage, {producto});  
  }

}
