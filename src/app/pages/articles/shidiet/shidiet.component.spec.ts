import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShidietComponent } from './shidiet.component';

describe('ShidietComponent', () => {
  let component: ShidietComponent;
  let fixture: ComponentFixture<ShidietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShidietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShidietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
