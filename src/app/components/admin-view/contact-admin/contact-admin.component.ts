import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contactService';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.css'],
  providers: [ContactService]
})
export class ContactAdminComponent implements OnInit {
  public contacts: any = [];
  public per_page: number = 10;
  public current_page: number = 1;
  public query: null = null;
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
  constructor(private _service: ContactService, private _router: Router) { }
  
  ngOnInit(): void {
    this.getContacts()
  }

  getContacts() {
    this._service.getContacts(this.current_page, this.per_page, this.query).subscribe((data) => {
      this.contacts = data;
    });
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

  goToDetail(id: string) {
    this._router.navigate([`admin/contacts/detail/${id}`])
  }

  next(): void {
    this.current_page += 1;
    this.getContacts()
  }

  previous(): void {
    this.current_page -= 1;
    this.getContacts()
  }
}
