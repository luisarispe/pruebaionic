import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {URL_SERVICIOS}  from "../../config/url.servicios";

@Injectable()
export class ProductosProvider {
pagina:number=0;
productos:any[]=[];
categorias:any[]=[];
productos_categoria:any[]=[];
pagina_producto_categoria:number=0;
  constructor(public http: HttpClient) {
  this.cargar_todos();
  this.cargar_categorias();
  }
  cargar_productos_categoria(categoria:any){
    let promesa = new Promise((resolve, reject)=>{
      let url= URL_SERVICIOS + 'productos/por_tipo/' + categoria+ '/' + this.pagina_producto_categoria;
      this.http.get(url).subscribe(data=>{
        if (data['error']) {
          console.log(data['mensaje']);
        }else{
          this.productos_categoria.push(...data['productos']);
          this.pagina_producto_categoria+=1;
          console.log(this.productos_categoria);
        }
        resolve();
      })
    });
    return promesa;
  }
  cargar_categorias(){
    let url=URL_SERVICIOS + "lineas";
    this.http.get(url).subscribe(data=>{
      if (data['error']) {
        //aqui va el error
      }else{
        this.categorias.push(...data['lineas']);
        console.log(this.categorias);
      }
    });
  }
  cargar_todos(){
    let promesa = new Promise((resolve, reject)=>{
        let url= URL_SERVICIOS + "productos/todos/" + this.pagina;
        this.http.get(url).subscribe(data=>{
             console.log(data);
             if (data['error']) {
                 //aqui hay un problema
             }else{
             let nuevodatos= this.agrupar(data['productos'],2);
             this.productos.push(...nuevodatos);
             console.log(this.productos);
             this.pagina=this.pagina +1;
             //this.pagina+=1;

             }
             resolve();
        });
      });
  return promesa;
  }
  private agrupar(arr:any, tamano:number){
    let ArrayAgrupado=[];
    for (let i = 0; i < arr.length; i+=tamano) {
        ArrayAgrupado.push(arr.slice(i, i+tamano));
    }
    console.log(ArrayAgrupado);
    return ArrayAgrupado;

  }

}
