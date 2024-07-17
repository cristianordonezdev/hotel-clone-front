import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
declare var $:any;

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {

  constructor(private wowService:NgwWowService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.wowService.init();
    window.addEventListener("scroll",function(){
      let offset=window.pageYOffset;
      $(".parallax").css("background-position-y",offset * 0.7 +'px');

    });
  }

}
