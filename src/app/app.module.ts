import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { InterfazComponent } from './interfaz/interfaz.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    InterfazComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
