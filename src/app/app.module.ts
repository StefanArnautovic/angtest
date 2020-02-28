import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeloComponent } from './telo/telo.component';
import { TeloComponent } from '.c:/Users/Stefan Arnautovic/Desktop/angwebssr/angularSSR/src/telo/telo.component';
import { FooterComponent } from '.c:/Users/Stefan Arnautovic/Desktop/angwebssr/angularSSR/src/footer/footer.component';
import { GalerijaComponent } from '.c:/Users/Stefan Arnautovic/Desktop/angwebssr/angularSSR/src/galerija/galerija.component';
import { ProbaComponent } from './proba/proba.component';

@NgModule({
  declarations: [
    AppComponent,
    TeloComponent,
    TeloComponent,
    FooterComponent,
    GalerijaComponent,
    ProbaComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
