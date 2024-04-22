import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesencadrantsComponent } from './listesencadrants.component';

describe('ListesencadrantsComponent', () => {
  let component: ListesencadrantsComponent;
  let fixture: ComponentFixture<ListesencadrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListesencadrantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListesencadrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
