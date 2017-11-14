import { TestBed, inject } from '@angular/core/testing';

import { PokemonRequestService } from './pokemon-request.service';

describe('PokemonRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonRequestService]
    });
  });

  it('should ...', inject([PokemonRequestService], (service: PokemonRequestService) => {
    expect(service).toBeTruthy();
  }));
});
