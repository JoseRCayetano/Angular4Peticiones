import { Component, OnInit } from '@angular/core';
import { PokemonRequestService } from '../core/pokemon-request/pokemon-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _pokemonRequestSrv: PokemonRequestService) { }

  ngOnInit() {
    this._pokemonRequestSrv.getPokemon('1').subscribe(pokemon => {
      console.log(pokemon);
    }, error => {
      console.log(error);
    });
  }

}
