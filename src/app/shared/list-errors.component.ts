import { Component, Input } from '@angular/core';

import { Errors } from './models/errors.model';

@Component({
  selector: 'list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss']
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (errorList.errors) {

      for (const field in errorList.errors) {
        this.formattedErrors.push(` ${errorList.errors[field].message}`);
      }
    }
  }


  get errorList() { return this.formattedErrors; }


}
