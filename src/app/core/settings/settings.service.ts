import { Injectable } from '@angular/core';
import { Settings } from './settings';

@Injectable()
export class SettingsService {

  public settings = new Settings;
  constructor() {
    this.settings['apiBaseUrl'] = 'api/v2';
  }

}
