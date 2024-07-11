import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/imagesService';


declare var $:any;

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

  constructor(
    private _service: ImagesService,
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
  deleteImage():void {
    $('#modalConfirm').modal('hide')
    $('.modal-backdrop').remove();
    this._service.deleteImage(this.image_selected_id).subscribe((response) => {
      this.images = this.images.filter((image) => image.id !== this.image_selected_id)
    }, (error) => {
      console.log(error)
    })
  }
  confirmToDelete(id: string): void {
    this.image_selected_id = id;
    $('#modalConfirm').modal('show');
  }
  openFile() {
    $('#fileManager').click();
  }
  // onFilesSelected(event: any) {
  //   setTimeout(() => {
  //     this.loading = true;
  //     const files: File[] = event.files;
  //     const data: FormData = new FormData();
  //     data.append('imagetypeid', 'e4567686-1b4d-483d-a374-9e99306c8e7b');
  //     for (let index = 0; index < files.length; index++) {
  //       data.append('file', files[index]);      
  //     }
  //     this._service.uploadImages(data).subscribe((response) => {
  //       this.images = this.images.concat(response);
  //       this.loading = false;
  //     }, (error) => {
  //       console.log(error)
  //       this.loading = false;
  //     })
  //   }, 1000);
  // }
}
