import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductosProvider} from "../../providers/index.services";
import {ProductoPage} from "../index.paginas";
import {CategoriasPage} from "../index.paginas";
@Component({
  selector: 'page-por-categorias',
  templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {
  categoria:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public _ps:ProductosProvider) {
    this.categoria= this.navParams.get("categoria");
    console.log(this.navParams.get("categoria"));
    this._ps.cargar_productos_categoria(this.categoria.id);
  }
  ver_producto(producto:any){
    this.navCtrl.push(ProductoPage, {producto});
  }
  volver_atras(){
    this._ps.pagina_producto_categoria=0;
    this._ps.productos_categoria.length=0;
    this.navCtrl.push(CategoriasPage);
  }
  doInfinite(infiniteScroll){
    this._ps.cargar_productos_categoria(this.categoria.id).then(()=>{
      infiniteScroll.complete();
    }).catch(e=>{
      infiniteScroll.complete();
    });
  }

}
