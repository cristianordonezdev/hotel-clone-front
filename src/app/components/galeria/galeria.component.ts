import { Component, OnInit } from '@angular/core';
import { NgwWowService } from "ngx-wow";
import { ImagesService } from 'src/app/services/imagesService';
 
declare var $:any;
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  providers: [ImagesService]
})
export class GaleriaComponent implements OnInit {
  public images: any = [];

  constructor(private wowService: NgwWowService, private _service: ImagesService) { 
  }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.wowService.init();
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      $(".parallax").css("background-position-y", offset * 0.7 + 'px');
     
    });
    this.getImages();

  }

  getImages() {
    this._service.getImages('room').subscribe(
      response => {
        this.images = response;
        console.log(response);
      },
      err => {
        this.images = [
          { filePath: "https://picsum.photos/200/300" },
          { filePath: "https://picsum.photos/200/400" },
          { filePath: "https://picsum.photos/200/300" },
          { filePath: "https://picsum.photos/200/400" }
        ];
        
      }
    );
  }

}
