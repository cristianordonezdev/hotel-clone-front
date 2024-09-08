import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import { RoomsService } from 'src/app/services/roomsService';

declare var $:any;
@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  public rooms: any = []
  constructor(private wowService : NgwWowService, private _service: RoomsService) {
  }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.wowService.init();
    window.addEventListener("scroll",function(){
      let offset=window.pageYOffset;
      $(".parallax").css("background-position-y",offset * 0.7 +'px');

    });
    this.getRooms()
  }

  getRooms() {
    this._service.getRooms().subscribe(data => {
      this.rooms = data;
    }, error => {
      this.rooms.push({
        name: 'U name',
        description: 'Una description',
        images: ["https://picsum.photos/200/300", "https://picsum.photos/200/400"],
        characteristics: "Caracteristica 1, caracteristica 2, caracteristica 3"
      })
    });
  }
  


}
