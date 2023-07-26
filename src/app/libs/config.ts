import { environment } from "src/environments/environment";
import { Injectable} from '@angular/core';

@Injectable()
export class Utils {
  constructor() {}

  getCoreUrl():string {
    return environment.url_core;
  }
  isAdmin(): boolean {
    let userData:any = localStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData);
      console.log(userData.roles.indexOf('Writer') !== -1)
      return userData.roles.indexOf('Writer') !== -1;
    }
    return false
  }
  getTokenSession(): string {
    const token: string | null = localStorage.getItem('token');
    return token ?? '';
  }
}
