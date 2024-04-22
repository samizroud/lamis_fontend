import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetencoursComponent } from './sujetencours.component';

describe('SujetencoursComponent', () => {
  let component: SujetencoursComponent;
  let fixture: ComponentFixture<SujetencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SujetencoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SujetencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
