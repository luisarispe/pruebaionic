import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {URL_SERVICIOS } from "../../config/url.servicios";
import {AlertController} from "ionic-angular";
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioProvider {
  token:string;
  id_usuario:string;
  constructor(public http: HttpClient,
              public alertctrl:AlertController
              ) {
  }
  ingresar(correo:string,contrasena:string){
    let data ={
      "correo" :correo,
      "contrasena": contrasena
    }
    let url = URL_SERVICIOS + "login";
    return this.http.post(url,data).map(resp=>{
      let data_resp=resp;
      if (data_resp['error']) {
        this.alertctrl.create({
         title:"Información",
         subTitle: data_resp['mensaje'],
         buttons:['Aceptar'] 
        }).present();
      }else{
        this.token = data_resp['token'];
        this.id_usuario= data_resp['id_usuario'];
        console.log(this.id_usuario,this.token);
      }
    })
  }

}
