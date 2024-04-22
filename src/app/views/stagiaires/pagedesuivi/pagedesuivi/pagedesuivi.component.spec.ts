import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedesuiviComponent } from './pagedesuivi.component';

describe('PagedesuiviComponent', () => {
  let component: PagedesuiviComponent;
  let fixture: ComponentFixture<PagedesuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagedesuiviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagedesuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
