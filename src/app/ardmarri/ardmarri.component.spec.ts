import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdmarriComponent } from './ardmarri.component';

describe('ArdmarriComponent', () => {
  let component: ArdmarriComponent;
  let fixture: ComponentFixture<ArdmarriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArdmarriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArdmarriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
