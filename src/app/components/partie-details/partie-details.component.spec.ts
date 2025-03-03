import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieDetailsComponent } from './partie-details.component';

describe('PartieDetailsComponent', () => {
  let component: PartieDetailsComponent;
  let fixture: ComponentFixture<PartieDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartieDetailsComponent]
    });
    fixture = TestBed.createComponent(PartieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
