import { SettingsService } from './../settings/settings.service';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Settings } from '../settings/settings';
import { Injector } from '@angular/core/src/di/injector';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
export abstract class ApiRequest<t> {

    protected http: Http;
    protected settings: Settings;
    protected urlBase: string;
    protected headers = new Headers ({'Content-type': 'aplication/json'});

    constructor (protected injector: Injector, protected path: string) {
        this.http = injector.get(Http);
        const settingsService: SettingsService = injector.get(SettingsService);
        this.settings = settingsService.settings;
        this.urlBase = this.settings.apiBaseUrl;
    }

    public setUrlApibase(url: string) {
        this.urlBase = url + this.path;
    }
    public getUrlApiBase(): string {
        return this.urlBase;
    }

    protected handleError = (error: Response): Promise<any> | Observable<any> => {
        return Observable.throw(error['message'] || error);
    }
}
