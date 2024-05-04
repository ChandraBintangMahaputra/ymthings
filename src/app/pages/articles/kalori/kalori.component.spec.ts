import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaloriComponent } from './kalori.component';

describe('KaloriComponent', () => {
  let component: KaloriComponent;
  let fixture: ComponentFixture<KaloriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaloriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaloriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
