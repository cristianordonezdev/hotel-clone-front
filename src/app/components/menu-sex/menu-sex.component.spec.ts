import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSexComponent } from './menu-sex.component';

describe('MenuSexComponent', () => {
  let component: MenuSexComponent;
  let fixture: ComponentFixture<MenuSexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
