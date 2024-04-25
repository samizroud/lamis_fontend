import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesnonvalidesComponent } from './tachesnonvalides.component';

describe('TachesnonvalidesComponent', () => {
  let component: TachesnonvalidesComponent;
  let fixture: ComponentFixture<TachesnonvalidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TachesnonvalidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TachesnonvalidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
