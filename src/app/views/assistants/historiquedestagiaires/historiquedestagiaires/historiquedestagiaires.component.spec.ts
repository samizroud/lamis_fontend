import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquedestagiairesComponent } from './historiquedestagiaires.component';

describe('HistoriquedestagiairesComponent', () => {
  let component: HistoriquedestagiairesComponent;
  let fixture: ComponentFixture<HistoriquedestagiairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriquedestagiairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriquedestagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
