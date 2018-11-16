import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AlertController, Platform, ModalController} from "ionic-angular";
import { Storage } from '@ionic/storage';
import {UsuarioProvider} from "../usuario/usuario";
import {CarritoPage,LoginPage} from "../../pages/index.paginas";
@Injectable()
export class CarritoProvider {
items:any[]=[];
  constructor(public http: HttpClient,
              public alertctrl:AlertController,
              public platform: Platform,
              public storage: Storage,
              public modalctrl: ModalController,
              public _us:UsuarioProvider) {
                this.cargar_storage();
  }

  agregar_carrito(item_parametro:any){
    for(let item of this.items){
      if (item.codigo==item_parametro.codigo) {
        this.alertctrl.create({
        title:'Informacion',
        subTitle:'Ya esta en la canasta este producto',
        buttons:['OK']
        }).present();
        return;
      }
    }
    this.items.push(item_parametro);
    this.guardar_storage();
  }
  guardar_storage(){
    //dispositivo
    if (this.platform.is("cordova")) {
      this.storage.set("items",this.items);
    }else{
      //computadora
      localStorage.setItem("items", JSON.stringify(this.items));
    }
  }
  cargar_storage(){
    let promesa = new Promise((resolve, reject)=>{
      if (this.platform.is("cordova")) {
        //dispositivo
        this.storage.ready().then(()=>{
          this.storage.get("items").then(items=>{
            if (items) {
              this.items=items;
            }
            resolve();
          })
          
        })
      }else{
        //computadora
        if (localStorage.getItem("items")) {
          this.items= JSON.parse(localStorage.getItem("items"));
        }
        resolve();
      }
    });
    return promesa;
  }
  ver_carrito(){
    let modal:any
    if (this._us.token) {
      modal=this.modalctrl.create(CarritoPage);
    }else{
      modal=this.modalctrl.create(LoginPage);
    }
    modal.present();
    modal.onDidDismiss((abrirCarrito:boolean)=>{
      if (abrirCarrito) {
        this.modalctrl.create(CarritoPage);  
      }      
    });
    
  }

}
