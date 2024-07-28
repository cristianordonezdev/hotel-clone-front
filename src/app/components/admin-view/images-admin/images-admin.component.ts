import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/imagesService';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-images-admin',
  templateUrl: './images-admin.component.html',
  styleUrls: ['./images-admin.component.css'],
  providers: [ImagesService]
})
export class ImagesAdminComponent implements OnInit {
  images: any[] = [];
  image_selected_id: string = '';
  files_upload: any[] = [];
  loading: boolean = false;
  images_types: any[] = []
  type: string | undefined;
  open_add_images: boolean = false;
  private _files: File[] = [];
  modalRef?: BsModalRef;

  constructor(
    private _service: ImagesService,
    private _route: ActivatedRoute,
    private modalService: BsModalService
  ) { }
  

  ngOnInit(): void {
    this.getImagesTypes();
    this.getImages();
  }
  getImagesTypes(): void {
    this._service.getImagesTypes().subscribe((response) => {
      this.images_types = response;
    }, error => {
      console.log(error)
    })
  }
  filterBy(type: string) {
    this.type = type;
    // Crea un nuevo objeto con los mismos valores de params y queryParams del actual
    // Navega a la misma ruta con los nuevos parámetros
  
    // this._route.snapshot.params.type = this.type;
    // this._router.navigate([], { queryParams: {} });
    console.log('entre', this.type)
    this.getImages();
  }
  getImages(): void {
    this._service.getImages(this.type).subscribe((response) => {
      this.images = response;
    }, error => {
      console.log(error)
    })
  }
  deleteImage(id: string):void {
    this._service.deleteImage(id).subscribe((response) => {
      console.log(response)
      this.images = this.images.filter((image) => image.id !== id)
      this.image_selected_id = '';
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
    form_data.append('imagetypeid', 'e4567686-1b4d-483d-a374-9e99306c8e7b');

    for (let i = 0; i < this._files.length; i++) {
      form_data.append('File', this._files[i]);
    }
    this._service.uploadImages(form_data).subscribe((response) => {
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
