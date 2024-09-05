import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Utils } from '../libs/config';

@Injectable()
export class OffersService {
    utils: Utils;
    headers: HttpHeaders;
    constructor(private _http:HttpClient) {
        this.utils = new Utils();
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${this.utils.getTokenSession()}`
        });
    }
    getOffers(): Observable<any> {
        return this._http.get(`${this.utils.getCoreUrl()}/offer`);
    }

    deleteOffer(id: string): Observable<any> {
        return this._http.delete(`${this.utils.getCoreUrl()}/offer/${id}`, { headers: this.headers });
    }

    createOffer(form_data: FormData): Observable<any> {
        return this._http.post(`${this.utils.getCoreUrl()}/offer/`, form_data, { headers: this.headers });
    }

    getOneOffer(offerId: string): Observable<any> {
        return this._http.get(`${this.utils.getCoreUrl()}/offer/${offerId}`, { headers: this.headers });
    }

    updateOffer(offerId: number, form_data: FormData) {
        return this._http.put(`${this.utils.getCoreUrl()}/offer/${offerId}`, form_data, { headers: this.headers });
    }
}
