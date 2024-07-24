import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
  public sections: any[] = [
    {
      title: 'Home',
      actions: [{ name: 'Carrusel' }, { name: 'Info principal' }],
    },
    {
      title: 'Habitaciones',
      actions: [{ name: 'Listar' }, { name: 'Crear' }],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
