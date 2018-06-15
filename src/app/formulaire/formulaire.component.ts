import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

user : User = new User("bourdaudv@gmail.com", "angularbeast")

  constructor() { }

  ngOnInit() {
  }
  
  handleSubmit(value) {
    console.log('Form value', value);
    }

}
