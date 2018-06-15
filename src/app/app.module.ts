import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormulaireTSFirstComponent } from './formulaire-tsfirst/formulaire-tsfirst.component';
import { CombineComponent } from './combin-approche/combin-approche.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    FormulaireTSFirstComponent,
    CombineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
