import { PokemonRequestService } from './pokemon-request/pokemon-request.service';
import { SettingsService } from './settings/settings.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SettingsService, PokemonRequestService]
})
export class CoreModule { }
