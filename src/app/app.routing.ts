//IMPORTACION DE TODAS MIS RUTAS

import { Routes, RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//IMPORTACION DE MIS COMPONENTES

import { InicioComponent } from './components/inicio/inicio.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AvisoDePrivacidadComponent } from './components/aviso-de-privacidad/aviso-de-privacidad.component';
import { AlimentosYBebidasComponent } from './components/alimentos-y-bebidas/alimentos-y-bebidas.component';
import { LoginComponent } from './components/login/login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { ImagesAdminComponent } from './components/admin-view/images-admin/images-admin.component';
import { AuthGuard } from 'src/shared/guards/auth.guards';
import { RoomsAdminComponent } from './components/admin-view/rooms-admin/rooms-admin.component';
import { RoomsCreateAdminComponent } from './components/admin-view/rooms-create-admin/rooms-create-admin.component';
import { OffersAdminComponent } from './components/admin-view/offers-admin/offers-admin.component';
import { OffersCreateAdminComponent } from './components/admin-view/offers-create-admin/offers-create-admin.component';
import { ContactAdminComponent } from './components/admin-view/contact-admin/contact-admin.component';
import { ContactDetailAdminComponent } from './components/admin-view/contact-detail-admin/contact-detail-admin.component';


//DEFINICION DE RUTAS

const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'habitaciones', component: HabitacionesComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'promociones', component: PromocionesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent },
    { path: 'servicios/alimentos-y-bebidas', component: AlimentosYBebidasComponent },
    { path: 'admin', component: LoginComponent },
    { path: 'admin/home', component: AdminViewComponent, canActivate:[AuthGuard] },
    { path: 'admin/images/:type', component: ImagesAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/rooms/list', component: RoomsAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/rooms/create', component: RoomsCreateAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/rooms/detail/:id', component: RoomsCreateAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/rooms/edit/:id', component: RoomsCreateAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/offers/list', component: OffersAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/offers/create', component: OffersCreateAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/offers/detail/:id', component: OffersCreateAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/offers/edit/:id', component: OffersCreateAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/contacts/list', component: ContactAdminComponent, canActivate:[AuthGuard] },
    { path: 'admin/contacts/detail/:id', component: ContactDetailAdminComponent, canActivate:[AuthGuard] },
];

//EXPORTACION DE MI APP.MODULE

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);