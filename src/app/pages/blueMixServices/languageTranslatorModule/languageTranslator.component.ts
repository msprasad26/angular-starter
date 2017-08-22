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
export class LanguageTranslatorComponent implements OnInit{
  data;
  public form: FormGroup;
  public text: AbstractControl;
  public buttonshow: boolean= true;
  constructor(private _baConfig: BaThemeConfigProvider,
              public fb: FormBuilder,
              private http: Http) {

    this.form = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.text = this.form.controls['text'];
  }
  ngOnInit(){
    this.buttonshow = false;
  }
  onSubmit(values) {
    this.buttonshow = true;
    $('#loader').show();
    this.http.get('http://langtest-pusillanimous-notum.au-syd.mybluemix.net/translate?text=' + values.text )
      .map((res: Response) => res.text())
      .subscribe( (data) => {
        $('#loader').hide();
        this.data = data;
      console.log(this.data); });
  }
}
