import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresdestagesComponent } from './offresdestages.component';

describe('OffresdestagesComponent', () => {
  let component: OffresdestagesComponent;
  let fixture: ComponentFixture<OffresdestagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffresdestagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffresdestagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
