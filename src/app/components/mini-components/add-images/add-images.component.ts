import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ImagesService } from 'src/app/services/imagesService';
import { DomSanitizer } from '@angular/platform-browser';
import { Utils } from 'src/app/libs/config';


@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.css'],
  providers: [Utils]
})
export class AddImagesComponent implements OnInit {
  @Input() images_types: any;
  @Output() close_add_images: EventEmitter<void> = new EventEmitter();
  

  loading: boolean = false;
  images: any [] = [];
  files_upload: any[] = [];
  files_loaded: any[] = [];
  blob_files: any[] = [];
  image_type_selected: string = 'room';


  constructor(
    private _service: ImagesService,
    private _domSanitizer: DomSanitizer,
    private _utils: Utils,
  ) { }

  ngOnInit(): void {
  }

  onFilesSelected(event: any) {
      this.loading = true;
      this.files_loaded = event.files;
      
      
      // data.append('imagetypeid', 'e4567686-1b4d-483d-a374-9e99306c8e7b');
      for (let index = 0; index < this.files_loaded.length; index++) {
        const id_unique: string = this._utils.generateIndex();
        this.files_loaded[index].id = id_unique
        let safeUrl = this._domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.files_loaded[index]))
        this.blob_files.push({url: safeUrl, id: id_unique});
      }
      // this._service.uploadImages(data).subscribe((response) => {
      //   this.images = this.images.concat(response);
      //   this.loading = false;
      // }, (error) => {
      //   console.log(error)
      //   this.loading = false;
      // })

  }
  deleteImageToUpload(id: string): void {
    this.blob_files = this.blob_files.filter(i => i.id !== id);
    this.files_loaded = this.files_loaded.filter(i => i.id !== id);
  }
  uploadImages(): void {
    const data: FormData = new FormData();
    console.log(this.files_loaded, 'y aqui imagetype', this.image_type_selected)
  }
  closeAddImages(): void {
    this.close_add_images.emit();
  }
}
