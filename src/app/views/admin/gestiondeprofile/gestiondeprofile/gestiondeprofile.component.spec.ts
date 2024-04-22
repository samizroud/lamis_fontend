import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondeprofileComponent } from './gestiondeprofile.component';

describe('GestiondeprofileComponent', () => {
  let component: GestiondeprofileComponent;
  let fixture: ComponentFixture<GestiondeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestiondeprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestiondeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
