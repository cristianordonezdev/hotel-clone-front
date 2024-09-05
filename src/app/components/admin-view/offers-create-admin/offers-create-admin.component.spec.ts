import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCreateAdminComponent } from './offers-create-admin.component';

describe('OffersCreateAdminComponent', () => {
  let component: OffersCreateAdminComponent;
  let fixture: ComponentFixture<OffersCreateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersCreateAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCreateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
