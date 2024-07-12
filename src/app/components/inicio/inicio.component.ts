import { Component, OnInit } from '@angular/core';
import { NgwWowService } from "ngx-wow";
import { ImagesService } from '../../services/imagesService';

declare var $:any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [ImagesService]
})
export class InicioComponent implements OnInit {

  constructor(private wowService:NgwWowService, private _service: ImagesService) { }
  images_carousel: string[] = [];


  ngOnInit(): void {
    this.wowService.init();

    $('.carousel').carousel({
      interval: 10000
    })
    this.getImagesCarousel();
  }
  getImagesCarousel() {
    this._service.getImages('carousel').subscribe((response) => {
      this.images_carousel = response.map((item: any) => item.filePath)
    }, (error) => {
      console.log(error)
    })
  }

}
