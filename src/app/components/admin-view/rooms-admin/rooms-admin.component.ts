import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/roomsService';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private _modal_service: BsModalService,
    private _router: Router,
    private _toastr: ToastrService,
  ) { 
  }

  public links:any =[
    {
      url:'/admin/home',
      label:'Inicio'
    },
    {
      url:'/admin/rooms/list',
      label:'Habitaciones'
    },
  ];

  public buttonDetails: any = {
    label: 'Crear habitación',
    route: ['/admin/rooms/create', '']
  }

  ngOnInit(): void {
    this.getRooms()
    this.showSuccess()
  }
  showSuccess() {
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
      this._toastr.success('La habitación ha sido borrada exitosamente', 'Éxito')
    }, err => {
      this._toastr.error('Algo salio mal al tratar de eliminar la habitación', 'Error')
    })

  }
  openModal(event: MouseEvent, template: any, room: any) {
    event.stopPropagation();
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

  goToDetail(id: string): void {
    this._router.navigate(['/admin/rooms/detail/' + id]);
  }
}
