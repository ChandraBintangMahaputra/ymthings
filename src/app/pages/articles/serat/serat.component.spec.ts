import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeratComponent } from './serat.component';

describe('SeratComponent', () => {
  let component: SeratComponent;
  let fixture: ComponentFixture<SeratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
