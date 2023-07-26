import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  open_modal: boolean = false;
  files_upload: any[] = [];
  loading: boolean = false;


  constructor(private _service: ImagesService, private _route: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.getImages();
  }
  getImages(): void {
    const type: string = this._route.snapshot.params.type;
    this._service.getImages(type).subscribe((response) => {
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
    this.open_modal = true;
    $('#modalConfirm').modal('show');
  }
  openFile() {
    $('#fileManager').click();
  }
  onFilesSelected(event: any) {
    setTimeout(() => {
      this.loading = true;
      const files: File[] = event.files;
      const data: FormData = new FormData();
      data.append('imagetypeid', 'e4567686-1b4d-483d-a374-9e99306c8e7b');
      for (let index = 0; index < files.length; index++) {
        data.append('file', files[index]);      
      }
      this._service.uploadImages(data).subscribe((response) => {
        this.images = this.images.concat(response);
        this.loading = false;
      }, (error) => {
        console.log(error)
        this.loading = false;
      })
    }, 1000);
  }
}
