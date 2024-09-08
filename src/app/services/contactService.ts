import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Utils } from '../libs/config';

@Injectable()
export class ContactService {
    utils: Utils;
    headers: HttpHeaders;
    constructor(private _http:HttpClient) {
        this.utils = new Utils();
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${this.utils.getTokenSession()}`
        });
    }
    getContacts(page_number: number, page_size: number, query: null): Observable<any> {
        return this._http.get(`${this.utils.getCoreUrl()}/contact?pageNumber=${page_number}&pageSize=${page_size}`, { headers: this.headers });
    }

    getContact(id: string): Observable<any> {
        return this._http.get(`${this.utils.getCoreUrl()}/contact/${id}`, { headers: this.headers });
    }

    postContact(data: any): Observable<any> {
        return this._http.post(`${this.utils.getCoreUrl()}/contact/`, data, { headers: this.headers });
    }
}
