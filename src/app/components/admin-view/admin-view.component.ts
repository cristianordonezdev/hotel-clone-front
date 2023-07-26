import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  type_admin: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  changeType(num: number) {
    this.type_admin = num;
  }
}
