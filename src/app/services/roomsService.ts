import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Utils } from '../libs/config';

@Injectable()
export class RoomsService {
    utils: Utils;
    headers: HttpHeaders;
    constructor(private _http:HttpClient) {
        this.utils = new Utils();
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${this.utils.getTokenSession()}`
        });
    }
    getRooms(): Observable<any> {
        return this._http.get(`${this.utils.getCoreUrl()}/room`);
    }

    deleteRoom(id: string): Observable<any> {
        return this._http.delete(`${this.utils.getCoreUrl()}/room/${id}`, { headers: this.headers });
    }

    createRoom(form_data: FormData): Observable<any> {
        return this._http.post(`${this.utils.getCoreUrl()}/room/`, form_data, { headers: this.headers });
    }

    getOneRoom(roomId: string): Observable<any> {
        return this._http.get(`${this.utils.getCoreUrl()}/room/${roomId}`, { headers: this.headers });
    }
}
