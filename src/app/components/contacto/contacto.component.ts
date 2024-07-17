import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/userService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $:any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers :[UserService]
})
export class ContactoComponent implements OnInit {

  public form_contact = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    window.scrollTo(0,0);
 
  }

}


