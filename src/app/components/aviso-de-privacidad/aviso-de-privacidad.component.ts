import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-de-privacidad',
  templateUrl: './aviso-de-privacidad.component.html',
  styleUrls: ['./aviso-de-privacidad.component.css']
})
export class AvisoDePrivacidadComponent implements OnInit {
  public title : string;
  constructor() {
    this.title="Aviso de privacidad"
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
