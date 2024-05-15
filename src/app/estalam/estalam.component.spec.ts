import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstalamComponent } from './estalam.component';

describe('EstalamComponent', () => {
  let component: EstalamComponent;
  let fixture: ComponentFixture<EstalamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstalamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
