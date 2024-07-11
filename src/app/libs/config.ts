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
  generateIndex(): string {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 5);
    const uniqueId = timestamp + randomPart;
    return uniqueId;
  }
}
