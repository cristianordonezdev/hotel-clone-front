import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/libs/config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Utils]
})
export class NavbarComponent implements OnInit {
  constructor(private _utils: Utils) { }
  show_submenu_login: boolean = false;
  is_admin: boolean = this._utils.isAdmin();

  ngOnInit(): void {
  }
  changeSubmenu():void {
    this.show_submenu_login = !this.show_submenu_login;
  }

  hasSession(): boolean {
    return !!localStorage.getItem('token');
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userData')
  }
}
