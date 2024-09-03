import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offersService';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-offers-admin',
  templateUrl: './offers-admin.component.html',
  styleUrls: ['./offers-admin.component.scss']
})
export class OffersAdminComponent implements OnInit {

  public offers: any = []
  public modalRef?: BsModalRef;
  public offer_selected: any = {}


  constructor(
    private _service: OffersService,
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
      url:'/admin/offers/list',
      label:'Ofertas'
    },
  ];

  ngOnInit(): void {
    this.getOffers()
  }

  getOffers():any {
    this._service.getOffers().subscribe(offers => {
      this.offers = offers;
    }, err => {
      console.log(err)
    })
  }

  deleteRoom(offer_id: string): void {
    this._service.deleteOffer(offer_id).subscribe(response => {
      if (response.id) {
        this.offers = this.offers.filter((room: any) => room.id!== offer_id)
        this.offer_selected = {}
        this.modalRef?.hide();
      }
      this._toastr.success('La oferta ha sido borrada exitosamente', 'Éxito')
    }, err => {
      this._toastr.error('Algo salio mal al tratar de eliminar la oferta', 'Error')
    })

  }
  openModal(event: MouseEvent, template: any, offer: any) {
    event.stopPropagation();
    this.offer_selected = offer;
    this.modalRef = this._modal_service.show(template, { class: 'modal-dialog-centered' });
  }
  confirm(): void {
    this.modalRef?.hide();
    this.deleteRoom(this.offer_selected.id);
  }
  decline(): void {
    this.modalRef?.hide();
    this.offer_selected = {};
  }

  goToDetail(id: string): void {
    this._router.navigate(['/admin/offers/detail/' + id]);
  }
}
