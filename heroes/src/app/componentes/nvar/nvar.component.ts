import { HeroesService } from './../../home/services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nvar',
  templateUrl: './nvar.component.html',
  styles: [
  ]
})
export class NvarComponent implements OnInit {

  constructor( public heroesService: HeroesService) { }

  ngOnInit(): void {
  }

}
