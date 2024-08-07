import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from 'src/app/services/roomsService';

@Component({
  selector: 'app-rooms-create-admin',
  templateUrl: './rooms-create-admin.component.html',
  styleUrls: ['./rooms-create-admin.component.scss']
})
export class RoomsCreateAdminComponent implements OnInit {

  constructor(
    private _service: RoomsService
  ) { }
  public files: File[] = [];

  ngOnInit(): void {
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
    {
      url:'admin/rooms/create',
      label:'Crear habitacion'
    },
  ];
  
  public form_room = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.required]),
    characteristics: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  submitForm(): void {
    const form_data: FormData = new FormData();
    const form_values: any = this.form_room.getRawValue();

    Object.keys(form_values).forEach((key: any) => {
      form_data.append(key, form_values[key] ?? '');
    });

    for (let index = 0; index < this.files.length; index++) {
      form_data.append('file', this.files[index])      
    }

    this._service.createRoom(form_data).subscribe((response: any) => {
      console.log(response)
    })

  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }
}
