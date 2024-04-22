import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquesstagiairesComponent } from './historiquesstagiaires.component';

describe('HistoriquesstagiairesComponent', () => {
  let component: HistoriquesstagiairesComponent;
  let fixture: ComponentFixture<HistoriquesstagiairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriquesstagiairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriquesstagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
