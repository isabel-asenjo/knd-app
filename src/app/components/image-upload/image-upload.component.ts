/*import { Component, OnInit, EventEmitter, Output, ViewContainerRef } from '@angular/core';

class ImageSnippet {
  static readonly IMAGE_SIZE = {width: 950, height: 720};

  pending: boolean = false;
  status: string = 'INIT';

  constructor(public src: string, public file: File) {}
}



@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  selectedFile: ImageSnippet;

  constructor() {
  }



  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader= new FileReader();

    reader.addEventListener('load',(event: any) =>{
      this.selectedFile = new ImageSnippet(event.target.result,file);
    });

    reader.readAsDataURL(file);
  }

}


*/



/*
import { Component } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})

export class ImageUploadComponent {
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private Api: ImageUploadService, private storage: AngularFireStorage) {}
  ngOnInit() {}
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
}*/





import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from "rxjs";
import { ImageUploadService } from 'src/app/services/image-upload.service';



@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  constructor(private router: Router, private storage: AngularFireStorage) { }
  //@ViewChild('imageUser') inputImageUser: ElementRef;


  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }

  onUpload(e) {
    console.log('subir', e.target.files[0]);
    const file = e.target.files[0];
    const filePath = 'product-images/imagen.png';
    const red = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
  }
  

}