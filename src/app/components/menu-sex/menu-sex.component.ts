import { Component, OnInit } from '@angular/core';
import { NgwWowService} from "ngx-wow";
declare var $:any;

@Component({
  selector: 'app-menu-sex',
  templateUrl: './menu-sex.component.html',
  styleUrls: ['./menu-sex.component.css']
})
export class MenuSexComponent implements OnInit {

  constructor(private wowService:NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      $(".parallax").css("background-position-y", offset * 0.7 + 'px');
     
    });
  }

}
