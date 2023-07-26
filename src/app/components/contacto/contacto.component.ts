import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/userService';

declare var $:any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers :[UserService]
})
export class ContactoComponent implements OnInit {

    ngOnInit(): void {
        
    }
  
  }


