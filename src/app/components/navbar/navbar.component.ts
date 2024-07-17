import { Component, OnInit } from '@angular/core';
import { INavigation} from 'src/app/interfaces/navigation.interface';
import { Utils } from 'src/app/libs/config';
import { main_navigation } from 'src/app/navigation/main_navigation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [Utils]
})
export class NavbarComponent implements OnInit {
  constructor(private _utils: Utils, private _router: Router) { }
  show_submenu_login: boolean = false;
  is_admin: boolean = this._utils.isAdmin();
  navigation_items: INavigation[] = main_navigation;
  handle_class: string = 'd-none';

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

  toggleSidebar(): void {
    this.handle_class = this.handle_class === 'd-none' ? 'd-block' : 'd-none';
  }
  handleClickRouteResponsive(route: string | null): void {
    this._router.navigate([`/${route}`]);
    this.handle_class = 'd-none'
  }
}
