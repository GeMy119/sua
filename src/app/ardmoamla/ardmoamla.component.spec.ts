import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdmoamlaComponent } from './ardmoamla.component';

describe('ArdmoamlaComponent', () => {
  let component: ArdmoamlaComponent;
  let fixture: ComponentFixture<ArdmoamlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArdmoamlaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArdmoamlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
