import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquedesujetComponent } from './historiquedesujet.component';

describe('HistoriquedesujetComponent', () => {
  let component: HistoriquedesujetComponent;
  let fixture: ComponentFixture<HistoriquedesujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriquedesujetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriquedesujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
