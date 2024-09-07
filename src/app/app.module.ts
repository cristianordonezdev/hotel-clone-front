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
import { AvisoDePrivacidadComponent } from './components/aviso-de-privacidad/aviso-de-privacidad.component';
import { AlimentosYBebidasComponent } from './components/alimentos-y-bebidas/alimentos-y-bebidas.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';//PARA APLICAR MIS FORMULARIOS TWO DATA BINDING 
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { ImagesAdminComponent } from './components/admin-view/images-admin/images-admin.component';
import { LoadingIconOverlayComponent } from './components/mini-components/loading-icon-overlay/loading-icon-overlay.component';
import { AddImagesComponent } from './components/mini-components/add-images/add-images.component' //PARA QUE PUEDA UTILIZAR MIS PETICIONES AJAX
import { ModalModule } from 'ngx-bootstrap/modal';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RoomsAdminComponent } from './components/admin-view/rooms-admin/rooms-admin.component';
import { RoomsService } from './services/roomsService';
import { RoomsCreateAdminComponent } from './components/admin-view/rooms-create-admin/rooms-create-admin.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OffersAdminComponent } from './components/admin-view/offers-admin/offers-admin.component';
import { OffersService } from './services/offersService';
import { OffersCreateAdminComponent } from './components/admin-view/offers-create-admin/offers-create-admin.component';
import { ContactAdminComponent } from './components/admin-view/contact-admin/contact-admin.component';
import { ContactDetailAdminComponent } from './components/admin-view/contact-detail-admin/contact-detail-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HabitacionesComponent,
    GaleriaComponent,
    ServiciosComponent,
    PromocionesComponent,
    ContactoComponent,
    AvisoDePrivacidadComponent,
    AlimentosYBebidasComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AdminViewComponent,
    ImagesAdminComponent,
    LoadingIconOverlayComponent,
    AddImagesComponent,
    BreadcrumbComponent,
    RoomsAdminComponent,
    RoomsCreateAdminComponent,
    OffersAdminComponent,
    OffersCreateAdminComponent,
    ContactAdminComponent,
    ContactDetailAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    appRoutingProviders,
    RoomsService,
    OffersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
