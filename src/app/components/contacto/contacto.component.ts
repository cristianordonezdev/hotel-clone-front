import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contactService';

declare var $:any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers :[ContactService]
})
export class ContactoComponent implements OnInit {

  constructor(private _service: ContactService, private _toastr: ToastrService) {}
  public form_contact = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  submitForm(): void {
    const data = {
      name: this.form_contact.value.name,
      email: this.form_contact.value.email,
      subject: this.form_contact.value.subject,
      message: this.form_contact.value.message,
    }
    this._service.postContact(data).subscribe((response: any) => {
      this.form_contact.reset()
      this._toastr.success('Se ha enviado tu contacto, pronto Hotel clone se pondrá en contacto contigo', 'Éxito')

    });
  }
}


