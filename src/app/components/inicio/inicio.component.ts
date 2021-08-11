import { Component, OnInit } from '@angular/core';
import { NgwWowService } from "ngx-wow";

declare var $:any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private wowService:NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();

    $('.carousel').carousel({
      interval: 10000
    })
  }

}
