import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { isPrefixNartawakValidator } from '../password/password.validator';

@Component({
  selector: 'app-formulaire-tsfirst',
  templateUrl: './formulaire-tsfirst.component.html',
  styleUrls: ['./formulaire-tsfirst.component.css']
})
export class FormulaireTSFirstComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    
    this.emailCtrl = fb.control('',[Validators.email, Validators.required]);

    this.passwordCtrl = fb.control('',[isPrefixNartawakValidator] );

    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  handleClear() {
    this.emailCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }

  handleSubmit() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }



}
