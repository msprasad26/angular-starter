import { Component, OnInit } from '@angular/core';
import { BaThemeConfigProvider } from '../../../theme';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'languageTranslator',
  templateUrl: './languageTranslator.component.html',
  styleUrls: ['./languageTranslator.scss']
})
export class LanguageTranslatorComponent {
  data;
  public form: FormGroup;
  public text: AbstractControl;
  constructor(private _baConfig: BaThemeConfigProvider,
              public fb: FormBuilder,
              private http: Http) {

    this.form = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.text = this.form.controls['text'];
  }

  onSubmit(values) {
    this.http.get('http://10.9.8.196:5214/translate?text=' + values.text )
      .map((res: Response) => res.text())
      .subscribe( (data) => { this.data = data; console.log(this.data); })
  }
}
