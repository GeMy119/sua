import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdVisitComponent } from './ard-visit.component';

describe('ArdVisitComponent', () => {
  let component: ArdVisitComponent;
  let fixture: ComponentFixture<ArdVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArdVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArdVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
