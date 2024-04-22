import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquessujetComponent } from './historiquessujet.component';

describe('HistoriquessujetComponent', () => {
  let component: HistoriquessujetComponent;
  let fixture: ComponentFixture<HistoriquessujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriquessujetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriquessujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
