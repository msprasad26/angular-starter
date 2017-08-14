import { Component , OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { UploadFileComponent } from './fileUploader/UploaderFile.component';
import { GlobalState } from '../../../global.state';
import * as _ from 'lodash';
@Component({
  selector: 'fileConverter',
  templateUrl: './fileConverter.html',
  styleUrls: ['./fileConverter.scss']
})
export class FileConverterComponent implements OnInit {
  data;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(
              private router: Router,
              private _state: GlobalState
  ) {
    this._state.subscribe('serviceResponded', (data) => {
      this.data = data;
    });
  }
  ngOnInit() {
    this.dropdownList = [
      {"id":'Json',"itemName":"Json"},
      {"id":'Text',"itemName":"Text"},
      {"id":'html',"itemName":"html"},
    ];
    this.dropdownSettings = {
      singleSelection: true,
      text:"Convert To",
      /*selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class"*/
    };
  }
  onItemSelect(item:any) {
    console.log(item);

  }
  OnItemDeSelect(item:any) {
    console.log(item);
  }
}

