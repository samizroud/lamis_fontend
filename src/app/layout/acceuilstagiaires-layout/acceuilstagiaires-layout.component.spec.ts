import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilstagiairesLayoutComponent } from './acceuilstagiaires-layout.component';

describe('AcceuilstagiairesLayoutComponent', () => {
  let component: AcceuilstagiairesLayoutComponent;
  let fixture: ComponentFixture<AcceuilstagiairesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceuilstagiairesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceuilstagiairesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
