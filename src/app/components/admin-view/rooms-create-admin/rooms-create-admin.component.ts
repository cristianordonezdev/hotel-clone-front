import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoomsService } from 'src/app/services/roomsService';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-rooms-create-admin',
  templateUrl: './rooms-create-admin.component.html',
  styleUrls: ['./rooms-create-admin.component.scss']
})
export class RoomsCreateAdminComponent implements OnInit {

  constructor(
    private _service: RoomsService,
    private _toastr: ToastrService,
    private _route: ActivatedRoute
  ) { }
  public files: File[] = [];
  public action: string = 'create';
  public images: string[] = []

  ngOnInit(): void {
    const id = this._route.snapshot.params.id
    const action = this._route.snapshot.params.action;

    if (id) {
      this.getRoom(id);
    }

    if (action === 'create') {
      this.links.push({
        url:'/admin/rooms/create',
        label:'Crear habitacion'
      })
    }
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

  public ButtonDetails: any = {
    label: 'Editar habitación',
  }
  
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
      this.form_room.reset()
      this._toastr.success('La habitación se ha creado con exitosamente', 'Éxito')
    }, error => {
      const errors = error.error.errors;
      let msj = ''

      for(const type in errors) {
        msj += `${errors[type].join(', ')}\n`
      }
      this._toastr.error('Hubo un error al crear la habitación. \n' + msj, 'Error')
    })

  }

  getRoom(id: string): void {
    this._service.getOneRoom(id).subscribe(response => {
      console.log(response)
      this.form_room.patchValue({
        name: response.name,
        description: response.description,
        characteristics: response.characteristics,
        price: response.price,
      })
      this.images = response.images;

      this.links.push({
        url:`/admin/rooms/detail/${id}`,
        label: `Detalle de ${response.name}`
      })
      this.action = 'detail';
      this.ButtonDetails.route = ['/admin/rooms/edit', id]

    }, error => {
      this._toastr.error('Hubo un error al obtener la habitación.')
    })
  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }
}
