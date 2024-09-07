import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
  public sections: any[] = [
    {
      title: 'Imagenes',
      actions: [{ name: 'Carrusel', route: 'admin/images/carousel' }, { name: 'Galeria', route: 'admin/images/room' }, { name: 'Alimentos y bebidas', route: 'admin/images/food' }],
    },
    {
      title: 'Habitaciones',
      actions: [{ name: 'Listar', route: 'admin/rooms/list' }, { name: 'Crear', route: 'admin/rooms/create' }],
    },
    {
      title: 'Ofertas',
      actions: [{ name: 'Listar', route: 'admin/offers/list' }, { name: 'Crear', route: 'admin/offers/create' }],
    },
    {
      title: 'Contactos',
      actions: [{ name: 'Listar', route: 'admin/contacts/list' }],
    },
  ];


  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToSection(rute: string): void {
    this._router.navigate([rute]);
  }
}
