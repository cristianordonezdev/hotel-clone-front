import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/imagesService';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-images-admin',
  templateUrl: './images-admin.component.html',
  styleUrls: ['./images-admin.component.scss'],
  providers: [ImagesService]
})
export class ImagesAdminComponent implements OnInit {
  images: any[] = [];
  image_selected_id: string = '';
  files_upload: any[] = [];
  loading: boolean = false;
  images_types: any[] = []
  open_add_images: boolean = false;
  private _files: File[] = [];
  modalRef?: BsModalRef;
  public type: string = '';

  public links:any =[
    {
      url:'/admin/home',
      label:'Inicio'
    },
  ];

  constructor(
    private _service: ImagesService,
    private _route: ActivatedRoute,
    private modalService: BsModalService,
    private _toast: ToastrService
  ) { }
  

  ngOnInit(): void {
    this.getImages();
    this.getImagesTypes();
  }
  getImagesTypes(): void {
    this._service.getImagesTypes().subscribe((response) => {
      this.images_types = response;
    }, error => {
      console.log(error)
    })
  }
  getImages(): void {
    this.type = typeof this._route.snapshot.params.type === 'string' ? this._route.snapshot.params.type : 'carousel';
    this.links.push({
      url: `/admin/images/${this.type}`,
      label: `Images de ${this.type}`
    })
    
    this._service.getImages(this.type).subscribe((response) => {
      this.images = response;
    }, error => {
      console.log(error)
    })
  }
  deleteImage(id: string):void {
    this._service.deleteImage(id).subscribe((response) => {
      this.images = this.images.filter((image) => image.id !== id)
      this.image_selected_id = '';
      this._toast.success('Exito', 'La imagen ha sido eliminada')
    }, (error) => {
      console.log(error)
    })
  }
  onFileSelected(event: any) {
    this._files = event.target.files;
    if (this._files.length > 5) {
      alert(`You can upload a maximum of 5 files.`);
      event.target.value = ''; // Clear the input
      return;
    }
  }
  saveImages() {
    const form_data: FormData = new FormData();
    const type_id: string = this.images_types.find(i => i.type === this.type).id;
    form_data.append('imagetypeid', type_id);

    for (let i = 0; i < this._files.length; i++) {
      form_data.append('File', this._files[i]);
    }
    this._service.uploadImages(form_data).subscribe((response) => {
      this._toast.success('Exito', 'Las imagenes han sido guardadas')

      this.images.push(...response);
    })
  }
  openModal(template: any, id: string) {
    this.image_selected_id = id;
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.deleteImage(this.image_selected_id);
  }

  decline(): void {
    this.modalRef?.hide();
    this.image_selected_id = '';
  }
}
