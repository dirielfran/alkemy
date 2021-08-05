import { HeroesService } from './../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  heroe!: Heroe ;
  colorOjos: string ='';
  colorCabello: string ='';

  constructor( private activatedRoute: ActivatedRoute,
                private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];
      if(id){
        this.heroe = this.heroesService.getHeroe(id);
        this.colorOjos = this.heroe.appearance?.['eye-color'] || '';
        this.colorCabello = this.heroe.appearance?.['hair-color'] || '';
      }
    })
  }

}
