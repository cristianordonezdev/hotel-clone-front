import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() links?: any;
  @Input() buttonDetails?: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  handleActionButton() {
    if (this.buttonDetails) {
      this._router.navigate(this.buttonDetails.route)
    }
  }
}
