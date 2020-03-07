import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeloComponent } from './telo/telo.component';
import { FooterComponent } from './footer/footer.component';
import { GalerijaComponent } from './galerija/galerija.component';

@NgModule({
  declarations: [
    AppComponent,
    TeloComponent,
    TeloComponent,
    FooterComponent,
    GalerijaComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
