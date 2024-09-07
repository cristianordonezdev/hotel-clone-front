import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contactService';

@Component({
  selector: 'app-contact-detail-admin',
  templateUrl: './contact-detail-admin.component.html',
  styleUrls: ['./contact-detail-admin.component.css'],
  providers: [ContactService]
})
export class ContactDetailAdminComponent implements OnInit {

  public links:any =[
    {
      url:'/admin/home',
      label:'Inicio'
    },
    {
      url:'/admin/contacts/list',
      label:'Contactos'
    },
  ];
  public contact: any = {};

  constructor(private _route: ActivatedRoute, private _service: ContactService) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    const id: string = this._route.snapshot.params.id;
    this._service.getContact(id).subscribe((response) => {
      this.contact = response;

      this.links.push({
        url: `/admin/contacts/detail/${id}`,
        label: `Detalle del Contacto ${this.contact.name}`
      })
    })
  }

  formatDate(utcDateStr: string) {
    const utcDate = new Date(utcDateStr);
  
    const offset = -6 * 60 * 60 * 1000;
  
    const cdmxDate = new Date(utcDate.getTime() + offset);
  
    const options: any = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: false 
    };
    
    return cdmxDate.toLocaleString('es-MX', options);;
  }
}
