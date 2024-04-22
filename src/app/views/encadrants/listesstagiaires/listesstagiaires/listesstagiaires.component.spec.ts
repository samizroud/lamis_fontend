import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesstagiairesComponent } from './listesstagiaires.component';

describe('ListesstagiairesComponent', () => {
  let component: ListesstagiairesComponent;
  let fixture: ComponentFixture<ListesstagiairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListesstagiairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListesstagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
