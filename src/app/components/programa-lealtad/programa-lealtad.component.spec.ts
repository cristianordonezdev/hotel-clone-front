import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaLealtadComponent } from './programa-lealtad.component';

describe('ProgramaLealtadComponent', () => {
  let component: ProgramaLealtadComponent;
  let fixture: ComponentFixture<ProgramaLealtadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramaLealtadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaLealtadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
