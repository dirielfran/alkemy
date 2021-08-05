import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NvarComponent } from '../componentes/nvar/nvar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [HomeComponent, NvarComponent, BuscadorComponent, DetalleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
