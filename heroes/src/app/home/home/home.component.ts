import { HeroesService } from './../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Heroe, Heroes } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroesSeleccionados: Heroe[] = [];

  intelligence: number  = 0;
  strength: number  = 0;
  speed: number  = 0;
  durability: number  = 0;
  power: number  = 0;
  combat: number  = 0;
  peso: number = 0;
  altura: number = 0;

  constructor( private fb: FormBuilder, private heroeService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesSeleccionados = this.heroeService.getHeroes();
    this.heroesSeleccionados.forEach( heroe => {
      this.intelligence += parseInt(heroe.powerstats?.intelligence || "0");
      this.strength += parseInt(heroe.powerstats?.strength || "0");
      this.speed += parseInt(heroe.powerstats?.speed || "0");
      this.durability += parseInt(heroe.powerstats?.durability || "0");
      this.power += parseInt(heroe.powerstats?.power || "0");
      this.combat += parseInt(heroe.powerstats?.combat || "0");
      this.peso += parseInt(heroe.appearance?.weight?.[1] || "0");
      this.altura += parseInt(heroe.appearance?.height?.[1] || "0");
    })
  }

  eliminarHeroe( heroe: Heroe){
    this.heroeService.deleteHeroe(heroe);
    this.ngOnInit()
  }

}
