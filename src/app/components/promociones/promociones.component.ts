import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import { OffersService } from 'src/app/services/offersService';
declare var $:any;

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss'],
  providers: [OffersService]
})
export class PromocionesComponent implements OnInit {
  public offers: any = [];
  constructor(private wowService:NgwWowService, private _service: OffersService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.wowService.init();
    window.addEventListener("scroll",function(){
      let offset=window.pageYOffset;
      $(".parallax").css("background-position-y",offset * 0.7 +'px');

    });
    this.getOffers();
  }

  getOffers() {
    this._service.getOffers().subscribe((response) => {
      this.offers = response;
    }, error => {
      this.offers = [{
        name: 'Oferta de prueba',
        description: 'De pruba',
        imagePath: "https://picsum.photos/200/220"
      }];
    });
  }

}
