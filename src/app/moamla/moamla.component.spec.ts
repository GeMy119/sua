import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoamlaComponent } from './moamla.component';

describe('MoamlaComponent', () => {
  let component: MoamlaComponent;
  let fixture: ComponentFixture<MoamlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoamlaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoamlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
