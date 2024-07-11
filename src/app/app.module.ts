import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { appRoutingProviders } from './app.routing';
import { routing } from './app.routing';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProgramaLealtadComponent } from './components/programa-lealtad/programa-lealtad.component';
import { AvisoDePrivacidadComponent } from './components/aviso-de-privacidad/aviso-de-privacidad.component';
import { AlimentosYBebidasComponent } from './components/alimentos-y-bebidas/alimentos-y-bebidas.component';
import { MenuSexComponent } from './components/menu-sex/menu-sex.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';//PARA APLICAR MIS FORMULARIOS TWO DATA BINDING 
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { ImagesAdminComponent } from './components/admin-view/images-admin/images-admin.component';
import { LoadingIconOverlayComponent } from './components/mini-components/loading-icon-overlay/loading-icon-overlay.component';
import { AddImagesComponent } from './components/mini-components/add-images/add-images.component' //PARA QUE PUEDA UTILIZAR MIS PETICIONES AJAX


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HabitacionesComponent,
    GaleriaComponent,
    ServiciosComponent,
    PromocionesComponent,
    ContactoComponent,
    ProgramaLealtadComponent,
    AvisoDePrivacidadComponent,
    AlimentosYBebidasComponent,
    MenuSexComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AdminViewComponent,
    ImagesAdminComponent,
    LoadingIconOverlayComponent,
    AddImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
