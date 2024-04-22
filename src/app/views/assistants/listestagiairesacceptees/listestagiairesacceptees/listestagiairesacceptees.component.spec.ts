import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestagiairesaccepteesComponent } from './listestagiairesacceptees.component';

describe('ListestagiairesaccepteesComponent', () => {
  let component: ListestagiairesaccepteesComponent;
  let fixture: ComponentFixture<ListestagiairesaccepteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListestagiairesaccepteesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListestagiairesaccepteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
