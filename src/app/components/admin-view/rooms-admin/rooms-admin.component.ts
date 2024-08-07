import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/roomsService';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rooms-admin',
  templateUrl: './rooms-admin.component.html',
  styleUrls: ['./rooms-admin.component.scss']
})
export class RoomsAdminComponent implements OnInit {

  public rooms: any = []
  public modalRef?: BsModalRef;
  public room_selected: any = {}

  constructor(
    private _service: RoomsService,
    private _modal_service: BsModalService
  ) { 
  }

  public links:any =[
    {
      url:'/admin/home',
      label:'Inicio'
    },
    {
      url:'admin/rooms/list',
      label:'Habitaciones'
    },
  ];

  ngOnInit(): void {
    this.getRooms()
  }

  getRooms():any {
    this._service.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    }, err => {
      console.log(err)
    })
  }

  deleteRoom(room_id: string): void {
    this._service.deleteRoom(room_id).subscribe(response => {
      if (response.id) {
        this.rooms = this.rooms.filter((room: any) => room.id!== room_id)
        this.room_selected = {}
        this.modalRef?.hide();
      }
      console.log(response)
    }, err => {
      console.log(err)
    })

  }
  openModal(template: any, room: any) {
    this.room_selected = room;
    this.modalRef = this._modal_service.show(template, { class: 'modal-dialog-centered' });
  }
  confirm(): void {
    this.modalRef?.hide();
    this.deleteRoom(this.room_selected.id);
  }

  decline(): void {
    this.modalRef?.hide();
    this.room_selected = {};
  }
}
