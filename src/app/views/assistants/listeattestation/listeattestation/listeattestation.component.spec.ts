import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeattestationComponent } from './listeattestation.component';

describe('ListeattestationComponent', () => {
  let component: ListeattestationComponent;
  let fixture: ComponentFixture<ListeattestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeattestationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeattestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
