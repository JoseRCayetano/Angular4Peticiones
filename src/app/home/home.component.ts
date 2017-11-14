import { Component, OnInit } from '@angular/core';
import { PokemonRequestService } from '../core/pokemon-request/pokemon-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  optionsList = [];
  limit = 150;
  pokemon;
  constructor(private _pokemonRequestSrv: PokemonRequestService) { }
  
  ngOnInit() {
    this._generateLis();
    this._pokemonRequestSrv.getPokemon('1').subscribe(pokemon => {
      this.pokemon = pokemon;
      console.log(pokemon);
    }, error => {
      console.log(error);
    });
  }

  private _generateLis() {
    for (let i = 0; i < this.limit; i++) {
      this.optionsList.push({value: i + 1, label: i + 1});
    }
  }

  changePokemon(event) {
    this._pokemonRequestSrv.getPokemon(event).subscribe(pokemon => {
      this.pokemon = pokemon;
      console.log(pokemon);
    }, error => {
      console.log(error);
    });
    console.log(event);
  }

}

