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
export class conversationComponent implements OnInit{
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
  ngOnInit() {
  this.buttonshow = false;
}
  onSubmit(values) {
    this.buttonshow = true;
    $('#loader').show();
    this.http.get('http://langtest-pusillanimous-notum.au-syd.mybluemix.net/chatbot/' + values.text )
      .map((res: Response) => res.json())
      .subscribe( (data) => {
        $('#loader').hide();
        this.data = data.output.text;
        console.log(this.data);
      })
  }
}
