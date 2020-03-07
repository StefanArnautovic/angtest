import { GalerijaComponent } from './galerija/galerija.component';
import { TeloComponent } from './telo/telo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: TeloComponent },
  { path: 'usluge', component: TeloComponent },
  { path: 'galery', component: GalerijaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
