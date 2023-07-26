import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';//npm install --save rxjs-compat INSTALAR SI ES QUE SALE ERROR
import { Model } from '../models/model';
import { Utils } from '../libs/config';

@Injectable()
export class UserService {
    utils: Utils;
    constructor(private _http:HttpClient) {
        this.utils = new Utils();
    }

    textService(){
        return 'Estoy colocando perfectamen el servicio de angular ya activo';
    }

    login(username: string, password: string): Observable<any> {
        const body = {
            "username": username,
            "password": password
        }
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this._http.post(`${this.utils.getCoreUrl()}/auth/login`, body, { headers });
    }
}