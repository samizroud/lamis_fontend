import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesoffresComponent } from './listesoffres.component';

describe('ListesoffresComponent', () => {
  let component: ListesoffresComponent;
  let fixture: ComponentFixture<ListesoffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListesoffresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListesoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
