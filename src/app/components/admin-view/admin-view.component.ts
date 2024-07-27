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
      title: 'Home',
      actions: [{ name: 'Carrusel', route: 'admin/images/carousel' }, { name: 'Info principal' }],
    },
    {
      title: 'Habitaciones',
      actions: [{ name: 'Listar' }, { name: 'Crear' }],
    },
  ];


  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToSection(rute: string): void {
    this._router.navigate([rute]);
  }
}
