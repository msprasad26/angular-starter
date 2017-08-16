import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Response, Http } from '@angular/http';
import { JwtService } from '../../../../shared/services/jwt.service';
import { GlobalState } from '../../../../global.state';

@Component({
  selector: 'file-upload',
  template: '<input type="file" [multiple]="multiple" #fileInput>'
})
export class UploadFileComponent {
  arun;
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  data;
  constructor(private http: Http,
              private _state: GlobalState) {}

  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < 1; i++) {
        formData.append('file', inputEl.files.item(i));
      }
      this.http
        .post('http://10.9.8.196:5214/convert?type=text', formData)
        .map((res: Response) => res.text())
        .subscribe((data) => {
        console.log(data);
          this._state.notifyDataChanged('serviceResponded', data);
        });
    }
  }

/*uploadFile() {
  if (fileCount > 0) { // a file was selected
  for (let i = 0; i < 1; i++) {
  formData.append('file', inputEl.files.item(i));
}
this.http
  .post('http://10.9.9.34:5214/convert?type=text', formData)
  .map((res: Response) => res.text())
  .subscribe((data) => {
    console.log(data);
    this._state.notifyDataChanged('serviceResponded', data);
  });
  }
}*/
}
