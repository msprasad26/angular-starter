import { Component , OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FileUploadComponent } from './fileUploader/fileUploader.component';
import { GlobalState } from '../../../global.state';
import * as _ from 'lodash';
@Component({
  selector: 'VisualRecognition',
  templateUrl: './VisualRecognition.html',
  styleUrls: ['./VisualRecognition.scss']
})
export class VisualRecognitionComponent implements OnInit {
  data;
  img;
  constructor(
              private router: Router,
              private _state: GlobalState
  ) {


    this._state.subscribe('uploadImg', (img) => {
      this.img = img;
      console.log(this.img);
    });

    this._state.subscribe('serviceResponded', (data) => {
      this.data = data;
    });

  }

  ngOnInit() {}
}

