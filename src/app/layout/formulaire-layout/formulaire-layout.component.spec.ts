import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireLayoutComponent } from './formulaire-layout.component';

describe('FormulaireLayoutComponent', () => {
  let component: FormulaireLayoutComponent;
  let fixture: ComponentFixture<FormulaireLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
