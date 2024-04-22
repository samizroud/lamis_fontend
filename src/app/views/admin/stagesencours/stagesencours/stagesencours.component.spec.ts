import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesencoursComponent } from './stagesencours.component';

describe('StagesencoursComponent', () => {
  let component: StagesencoursComponent;
  let fixture: ComponentFixture<StagesencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StagesencoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagesencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
