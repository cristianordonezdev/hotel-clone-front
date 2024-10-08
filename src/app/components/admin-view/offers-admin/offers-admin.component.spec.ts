import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersAdminComponent } from './offers-admin.component';

describe('OffersAdminComponent', () => {
  let component: OffersAdminComponent;
  let fixture: ComponentFixture<OffersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
