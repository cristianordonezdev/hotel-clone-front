import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesAdminComponent } from './images-admin.component';

describe('ImagesAdminComponent', () => {
  let component: ImagesAdminComponent;
  let fixture: ComponentFixture<ImagesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
