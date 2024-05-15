import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdestalamComponent } from './ardestalam.component';

describe('ArdestalamComponent', () => {
  let component: ArdestalamComponent;
  let fixture: ComponentFixture<ArdestalamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArdestalamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArdestalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
