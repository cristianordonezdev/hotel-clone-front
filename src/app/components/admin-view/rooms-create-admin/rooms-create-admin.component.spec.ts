import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsCreateAdminComponent } from './rooms-create-admin.component';

describe('RoomsCreateAdminComponent', () => {
  let component: RoomsCreateAdminComponent;
  let fixture: ComponentFixture<RoomsCreateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsCreateAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsCreateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
