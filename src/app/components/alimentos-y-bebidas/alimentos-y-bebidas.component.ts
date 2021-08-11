import { Component, OnInit } from '@angular/core';
import { NgwWowService } from "ngx-wow";
declare var $:any;

@Component({
  selector: 'app-alimentos-y-bebidas',
  templateUrl: './alimentos-y-bebidas.component.html',
  styleUrls: ['./alimentos-y-bebidas.component.css']
})
export class AlimentosYBebidasComponent implements OnInit {

  constructor(private wowService:NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      $(".parallax").css("background-position-y", offset * 0.7 + 'px');
     
    });

  }

}
