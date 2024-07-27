import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/imagesService';


declare var $:any;

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

  constructor(
    private _service: ImagesService,
    private _route: ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    // this.getImagesTypes();
    this.getImages();
  }
  getImagesTypes(): void {
    this._service.getImagesTypes().subscribe((response) => {
      this.images_types = response;
    }, error => {
      console.log(error)
    })
  }
  getImages(): void {
    const type = typeof this._route.snapshot.params.type === 'string' ? this._route.snapshot.params.type : undefined;
    console.log(type)

    this._service.getImages(type).subscribe((response) => {
      this.images = response;
    }, error => {
      console.log(error)
    })
  }
  deleteImage(id: string):void {
    this._service.deleteImage(id).subscribe((response) => {
      console.log(response)
      this.images = this.images.filter((image) => image.id !== id)
    }, (error) => {
      console.log(error)
    })
  }
  confirmToDelete(id: string): void {
    this.image_selected_id = id;
    $('#modalConfirm').modal('show');
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
}
