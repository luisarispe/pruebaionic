import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductosProvider} from "../../providers/index.services";
import {PorCategoriasPage} from "../index.paginas";
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  por_categoria= PorCategoriasPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public _ps:ProductosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
