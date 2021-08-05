import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Heroe, Heroes } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroe!: Heroes;
  heroes: Heroe[] = [];
  heroesSeleccionados: Heroe[] = [];


  myForm: FormGroup = this.fb.group({
    search: ['', [ Validators.required]]
  });

  constructor( private fb: FormBuilder, private heroeService: HeroesService ) { }

  ngOnInit(): void {
  }

  getSearch(){
    this.heroeService.search( this.myForm.get('search')?.value ).subscribe(
      response => {
        this.heroe = response as Heroes;
        this.heroes = this.heroe.results;
        this.myForm.get('search')?.setValue('');
      }
    )
  }

  agregarHeroe(heroe: Heroe){
    this.heroesSeleccionados.push(heroe);
    this.heroeService.setHeroe(heroe);
  }
}
