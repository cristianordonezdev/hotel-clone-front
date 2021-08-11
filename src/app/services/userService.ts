import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';//npm install --save rxjs-compat INSTALAR SI ES QUE SALE ERROR
import { Model } from '../models/model';

@Injectable()
export class UserService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url="http://localhost:3000/"
    }

    textService(){
        return 'Estoy colocando perfectamen el servicio de angular ya activo';
    }

    saveUser(user:Model):Observable<any>{

        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set("Content-type","application/json")

        return this._http.post(this.url+"save-user",params,{headers:headers});
    }
}