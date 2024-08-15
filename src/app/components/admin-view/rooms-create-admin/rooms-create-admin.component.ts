import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from 'src/app/services/roomsService';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/imagesService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rooms-create-admin',
  templateUrl: './rooms-create-admin.component.html',
  styleUrls: ['./rooms-create-admin.component.scss'],
  providers: [RoomsService, ImagesService]
})
export class RoomsCreateAdminComponent implements OnInit {

  constructor(
    private _service: RoomsService,
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _service_images: ImagesService
  ) { }
  public files: File[] = [];
  public action: string = 'create';
  public images: {filePath: string, id: string}[] = []

  ngOnInit(): void {
    const id = this._route.snapshot.params.id
    console.log(this._route.snapshot.routeConfig?.path?.includes('detail'))
    if (this._route.snapshot.routeConfig?.path?.includes('detail')) this.action = 'detail';

    console.log('here fuck', this.action)
    if (id) {
      this.getRoom(id);
    }
    this._route.params.subscribe(params => {
      if (Object.keys(params).length > 0) {
        console.log(params);
        console.log('weh', this.action);
  
        if (this.action === 'create') {
          this.links[2] = ({
            url: '/admin/rooms/create',
            label: 'Crear habitacion'
          });
        
        } else if (this.action === 'edit') {
          const form_values: any = this.form_room.getRawValue();
          Object.keys(form_values).forEach((key: any) => {
            this.form_room.get(key)!.enable();
          });
  
          this.links[2] = {
            url: `/admin/rooms/edit/${id}`,
            label: 'Editar habitactión'
          };
        }
      }
    });
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
    {
      url:'/admin/rooms/create',
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

  updateRoom(): void {
    const id = this._route.snapshot.params.id
    const form_data: FormData = new FormData();
    const form_values: any = this.form_room.getRawValue();

    Object.keys(form_values).forEach((key: any) => {
      form_data.append(key, form_values[key] ?? '');
    });

    this._service.updateRoom(id, form_data).subscribe((response: any) => {
      this.links[2].label =  `Editar habitación ${response.name}`
      
      this._toastr.success('La habitación se ha actualizado exitosamente', 'Éxito')
    }, error => {
      const errors = error.error.errors;
      let msj = ''

      for(const type in errors) {
        msj += `${errors[type].join(', ')}\n`
      }
      this._toastr.error('Hubo un error al actualizar la habitación. \n' + msj, 'Error')
    })
  }

  deleteImage(id: string) {
    this._service_images.deleteImage(id).subscribe(response => {
      this.images = this.images.filter(image => image.id!== id);
      this._toastr.success('La imagen se ha eliminado exitosamente.')
    }, error => {
      this._toastr.error('Hubo un error al eliminar la imagen.')
    });
  }

  addImages(): void {
    const form_data: FormData = new FormData();
    form_data.append('imagetypeid', '3897b275-7a3f-4a84-a620-105b9b0eb89a');
    // form_data.append('RelativeRelationId', ''
    // for (let i = 0; i < this.files.length; i++) {
    //   form_data.append('File', this.files[i]);
    // }
    // this._service_images.uploadImages(form_data).subscribe((response) => {
    //   this.images.push(...response);
    // })
  }


  getRoom(id: string): void {
    this._service.getOneRoom(id).subscribe(response => {
      this.form_room.patchValue({
        name: response.name,
        description: response.description,
        characteristics: response.characteristics,
        price: response.price,
      })
      this.images = response.images;

      this.links[2] = {
        url:`/admin/rooms/detail/${id}`,
        label: this.action === 'detail' ? `Detalle de ${response.name}` : `Editar habitación ${response.name}`
      }
      // this.ButtonDetails.route = ['/admin/rooms/edit', id]

      const form_values: any = this.form_room.getRawValue();
      console.log('whattt', this.action)
      if (this.action === 'detail') {
        Object.keys(form_values).forEach((key: any) => {
          console.log('disabling')
          this.form_room.get(key)!.disable();
        });
      }

    }, error => {
      this._toastr.error('Hubo un error al obtener la habitación.')
    })

  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }
}
