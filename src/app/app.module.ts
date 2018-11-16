import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//importante
import { HttpClientModule } from '@angular/common/http';
//storage
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { CarritoProvider } from '../providers/carrito/carrito';
// import { ProductosProvider } from '../providers/productos/productos';
// import { UsuarioProvider } from '../providers/usuario/usuario';
import {CarritoPage,
        CategoriasPage,
        LoginPage,
        OrdenesPage,
        OrdenesDetallePage,
        PorCategoriasPage,
        ProductoPage,
        TabsPage} from "../pages/index.paginas";
//PIPE
import {ImagenPipe} from "../pipes/imagen/imagen";

//servicios
import {CarritoProvider, ProductosProvider, UsuarioProvider} from "../providers/index.services";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CarritoProvider,
    ProductosProvider,
    UsuarioProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
