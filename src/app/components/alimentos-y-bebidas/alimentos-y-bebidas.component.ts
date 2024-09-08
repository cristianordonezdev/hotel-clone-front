import { Component, OnInit } from '@angular/core';
import { NgwWowService } from "ngx-wow";
import { ImagesService } from 'src/app/services/imagesService';
declare var $:any;

@Component({
  selector: 'app-alimentos-y-bebidas',
  templateUrl: './alimentos-y-bebidas.component.html',
  styleUrls: ['./alimentos-y-bebidas.component.css'],
  providers: [ImagesService]
})
export class AlimentosYBebidasComponent implements OnInit {
  public images: any = [];
  constructor(private wowService:NgwWowService, private _service: ImagesService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.wowService.init();
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      $(".parallax").css("background-position-y", offset * 0.7 + 'px');
     
    });
    this.getImages()
  }

  getImages() {
    this._service.getImages('food').subscribe(data => {
      this.images = data;
    });
  }

}
