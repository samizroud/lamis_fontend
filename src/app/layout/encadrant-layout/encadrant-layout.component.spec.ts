import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantLayoutComponent } from './encadrant-layout.component';

describe('EncadrantLayoutComponent', () => {
  let component: EncadrantLayoutComponent;
  let fixture: ComponentFixture<EncadrantLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncadrantLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncadrantLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
