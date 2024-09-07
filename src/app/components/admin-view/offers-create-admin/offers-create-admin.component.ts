import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/imagesService';
import { ToastrService } from 'ngx-toastr';
import { OffersService } from 'src/app/services/offersService';

@Component({
  selector: 'app-offers-create-admin',
  templateUrl: './offers-create-admin.component.html',
  styleUrls: ['./offers-create-admin.component.scss'],
  providers: [OffersService, ImagesService]

})
export class OffersCreateAdminComponent implements OnInit {

  constructor(
    private _service: OffersService,
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _service_images: ImagesService,
    private _router: Router
  ) { }
  public files: File[] = [];
  public action: string = 'create';
  public image: any = {}

  ngOnInit(): void {
    const id = this._route.snapshot.params.id
    if (this._route.snapshot.routeConfig?.path?.includes('detail')) this.action = 'detail';
    else if (this._route.snapshot.routeConfig?.path?.includes('edit')) this.action = 'edit';

    if (id) {
      this.getOffer(id);
    }
    this._route.params.subscribe(params => {
      if (Object.keys(params).length > 0) {

        if (this.action === 'create') {
          this.links[2] = ({
            url: '/admin/offers/create',
            label: 'Crear Oferta'
          });
        
        } else if (this.action === 'edit') {
          const form_values: any = this.form_offer.getRawValue();
          Object.keys(form_values).forEach((key: any) => {
            this.form_offer.get(key)!.enable();
          });
  
          this.links[2] = {
            url: `/admin/offers/edit/${id}`,
            label: 'Editar Oferta'
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
      url:'/admin/offers/list',
      label:'Ofertas'
    },
    {
      url:'/admin/offers/create',
      label:'Crear Oferta'
    },
  ];

  public ButtonDetails: any = {
    label: 'Editar oferta',
  }
  
  public form_offer = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.required]),
  });

  submitForm(): void {
    const form_data: FormData = new FormData();
    const form_values: any = this.form_offer.getRawValue();

    Object.keys(form_values).forEach((key: any) => {
      form_data.append(key, form_values[key] ?? '');
    });

    for (let index = 0; index < this.files.length; index++) {
      form_data.append('file', this.files[index])      
    }

    this._service.createOffer(form_data).subscribe((response: any) => {
      this.form_offer.reset()
      this.files = [];
      const file_element = document.getElementById('file_input_add') as HTMLInputElement
      if (file_element) file_element.value = ""
      this._toastr.success('La oferta se ha creado con exitosamente', 'Éxito')
    }, error => {
      const errors = error.error.errors;
      let msj = ''

      for(const type in errors) {
        msj += `${errors[type].join(', ')}\n`
      }
      this._toastr.error('Hubo un error al crear la oferta. \n' + msj, 'Error')
    })
  }

  deleteImage(id: string) {
    this._service_images.deleteImage(id).subscribe(response => {
      this.image = {}
      this._toastr.success('La imagen se ha eliminado exitosamente.')
    }, error => {
      this._toastr.error('Hubo un error al eliminar la imagen.')
    });
  }

  updateOffer(): void {
    const id = this._route.snapshot.params.id
    const form_data: FormData = new FormData();
    const form_values: any = this.form_offer.getRawValue();

    Object.keys(form_values).forEach((key: any) => {
      form_data.append(key, form_values[key] ?? '');
    });

    this._service.updateOffer(id, form_data).subscribe((response: any) => {
      this.links[2].label =  `Editar Oferta ${response.name}`
      
      this._toastr.success('La oferta se ha actualizado exitosamente', 'Éxito')
    }, error => {
      const errors = error.error.errors;
      let msj = ''

      for(const type in errors) {
        msj += `${errors[type].join(', ')}\n`
      }
      this._toastr.error('Hubo un error al actualizar la oferta. \n' + msj, 'Error')
    })
  }

  addImages(): void {
    const id = this._route.snapshot.params.id
    const form_data: FormData = new FormData();
    form_data.append('imagetypeid', '8929b4bf-5be3-4002-8ad6-b9f46f782f16');
    form_data.append('RelativeRelationId', id)
    for (let i = 0; i < this.files.length; i++) {
      form_data.append('File', this.files[i]);
    }
    this._service_images.uploadImages(form_data).subscribe((response) => {
      this.image = response;
      this._toastr.success('Las imagenes se han agrado correctamente.')
    })
  }

  deleteOffer(): void {
    const id = this._route.snapshot.params.id

    this._service.deleteOffer(id).subscribe(response => {
      if (response.id) {
        this._router.navigate(['/admin/offers/list/'])
      }
      this._toastr.success('La oferta ha sido borrada exitosamente', 'Éxito')
    }, err => {
      this._toastr.error('Algo salio mal al tratar de eliminar la oferta', 'Error')
    })
  }

  getOffer(id: string): void {
    this._service.getOneOffer(id).subscribe(response => {
      this.form_offer.patchValue({
        name: response.name,
        description: response.description,
      })
      this.image = response.image;

      this.links[2] = {
        url:`/admin/offers/detail/${id}`,
        label: this.action === 'detail' ? `Detalle de ${response.name}` : `Editar Oferta ${response.name}`
      }
      // this.ButtonDetails.route = ['/admin/rooms/edit', id]

      const form_values: any = this.form_offer.getRawValue();
      if (this.action === 'detail') {
        Object.keys(form_values).forEach((key: any) => {
          this.form_offer.get(key)!.disable();
        });
      }

    }, error => {
      this._toastr.error('Hubo un error al obtener la habitación.')
    })
  }

  editOffer() {
    const id = this._route.snapshot.params.id
    this._router.navigate(['/admin/offers/edit/' + id])
  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }
}
