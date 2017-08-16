import { Component, OnInit } from '@angular/core';
import { BaThemeConfigProvider } from '../../../theme';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.scss']
})
export class conversationComponent {
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
    this.http.get('http://10.9.9.34:5214/chatbot/' + values.text )
      .map((res: Response) => res.json())
      .subscribe( (data) => { this.data = data.output.text; console.log(this.data); })
  }
}
