import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Response, Http } from '@angular/http';
import { JwtService } from '../../../../shared/services/jwt.service';
import { GlobalState } from '../../../../global.state';
/*import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';*/

@Component({
  selector: 'file-upload',
  template: '<input type="file" [multiple]="multiple" #fileInput>'
})
export class FileUploadComponent {
  url;
  picture;
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  data;
  constructor(private http: Http,
              private _state: GlobalState) {}
  upload() {

    let inputEl: HTMLInputElement = this.inputEl.nativeElement;

   /* const reader = new FileReader();
    reader.addEventListener('load', (event: Event) => {
      this.picture = (<any> event.target).result;
    }, false);
    reader.readAsDataURL(inputEl.files.item(0));
*/


    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < 1; i++) {
        formData.append('file', inputEl.files[i]);
        const reader = new FileReader();
        reader.addEventListener('load', (event: Event) => {
          this.picture = (<any> event.target).result;
          this._state.notifyDataChanged('uploadImg', this.picture);
        }, false);
        reader.readAsDataURL(inputEl.files[i]);

      }
      this.http
        .post('http://langtest-pusillanimous-notum.au-syd.mybluemix.net/img', formData)
        .map((res: Response) => res.json())
        .subscribe((data) => {
          console.log(data.images[0]);
          this._state.notifyDataChanged('serviceResponded', data.images[0].classifiers[0].classes);
        });
    }
  }
}
