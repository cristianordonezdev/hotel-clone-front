import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosYBebidasComponent } from './alimentos-y-bebidas.component';

describe('AlimentosYBebidasComponent', () => {
  let component: AlimentosYBebidasComponent;
  let fixture: ComponentFixture<AlimentosYBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentosYBebidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentosYBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
