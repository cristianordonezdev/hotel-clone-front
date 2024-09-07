import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailAdminComponent } from './contact-detail-admin.component';

describe('ContactDetailAdminComponent', () => {
  let component: ContactDetailAdminComponent;
  let fixture: ComponentFixture<ContactDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
