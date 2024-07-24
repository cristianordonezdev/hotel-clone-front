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
import { MenuSexComponent } from './components/menu-sex/menu-sex.component';
import { LoginComponent } from './components/login/login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { ImagesAdminComponent } from './components/admin-view/images-admin/images-admin.component';
import { AuthGuard } from 'src/shared/guards/auth.guards';


//DEFINICION DE RUTAS

const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'habitaciones', component: HabitacionesComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'promociones', component: PromocionesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent },
    { path: 'servicios/alimentos-y-bebidas', component: AlimentosYBebidasComponent },
    { path: 'servicios/menu-sex', component: MenuSexComponent },
    { path: 'admin', component: LoginComponent },
    { path: 'admin/home', component: AdminViewComponent, canActivate:[AuthGuard] },
    { path: 'admin-view-edit/images', component: ImagesAdminComponent },
];

//EXPORTACION DE MI APP.MODULE

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);