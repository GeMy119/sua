import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindVisitComponent } from './find-visit.component';

describe('FindVisitComponent', () => {
  let component: FindVisitComponent;
  let fixture: ComponentFixture<FindVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
