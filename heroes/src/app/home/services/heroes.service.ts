import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrlHero;

  heroes: Heroe[] = [];

  heroe: Heroe | undefined = {};

  cantidadBuenos: number = 0;
  cantidadMalos: number = 0;

  constructor( private http: HttpClient ) { }

  search( nombre: string): Observable<any>{
    return this.http.get(`${this.baseUrl}search/${nombre}`).pipe(
      catchError( e => {
        if (e.error.mensaje){
          this.alerta( 'error', e.error.mensaje, 'Error al Recuperar Heroe.');
        }
        return throwError(e);
      })
    );
  }

  setHeroe(heroe: Heroe){
    if(this.validarExiste(heroe.id || '')) {
      this.alerta('error', `El heroe ${heroe.name} ya se encuentra en el grupo`,  'Agregar Heroe');
    }else if(this.validaCantidad()){
      this.alerta('error', `la cantidad de heroes no puede ser mayor a seis`,  'Agregar Heroe');
    }else if(this.addAlignment(heroe)){
      this.alerta('error', `La orientacion de heroes mala/buena no puede pasar de tres `,  'Agregar Heroe');
    }else{
      this.heroes.push(heroe);
      this.alerta('success', `El heroe ${heroe.name} se ha agregado a su grupo`,  'Agregar Heroe');
    }
  }

  addAlignment(heroe: Heroe): boolean{
    let bandera = false;
    if(heroe.biography?.alignment == 'bad' && this.cantidadMalos < 3){
      this.cantidadMalos += 1;
    }else if(heroe.biography?.alignment == 'good' && this.cantidadBuenos < 3){
      this.cantidadBuenos += 1;
    }else{
      bandera = true;
    }
    return bandera;
  }

  deleteAlignment(heroe:Heroe){
    if(heroe.biography?.alignment == 'bad' ){
      this.cantidadMalos -= 1;
    }else if(heroe.biography?.alignment == 'good' ){
      this.cantidadBuenos -= 1;
    }
  }


  validarExiste(id: string):boolean{
    let bandera: boolean = false;
    this.heroes.forEach( heroe =>{
      if(heroe.id == id) bandera = true;
    })
    return bandera;
  }

  validaCantidad(): boolean{
    let bandera = false;
    if( this.heroes.length >= 6) bandera = true;
    return bandera;
  }

  getHeroes(): Heroe[]{
    return this.heroes;
  }

  deleteHeroe(heroe: Heroe): void{
    this.deleteAlignment(heroe);
    this.heroes = this.heroes.filter( hero => hero.id != heroe.id );
    this.alerta('success', `El heroe con ${heroe.id} se ha eliminado de su grupo`, 'Agregar Heroe.' );
  }

  getHeroe(id: string): Heroe {
    let heroe = this.heroes.find( elem => elem.id == id);
    if(heroe != undefined){
      return heroe;
    }
    return {};
  }

  alerta(icono: any, mensaje: string, titulo: string){
    Swal.fire({
      icon: icono,
      text:  mensaje,
      title: titulo,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
