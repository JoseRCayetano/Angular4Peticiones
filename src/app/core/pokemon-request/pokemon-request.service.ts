import { Injectable, Injector } from '@angular/core';
import { ApiRequest } from '../api-request/api-request';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PokemonRequestService extends ApiRequest<any>{

  constructor(protected injector: Injector) {
    super(injector, 'pokemon');
    this.handleError = this.handleError.bind(this);
   }

  getPokemon(idPokemon: string) {
    return this.http.get(`${this.urlBase}/pokemon/${idPokemon}`).map(data => {
      return  data.json();
    }).catch(this.handleError);
  }

}
