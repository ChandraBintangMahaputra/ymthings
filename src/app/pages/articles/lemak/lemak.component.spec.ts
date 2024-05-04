import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemakComponent } from './lemak.component';

describe('LemakComponent', () => {
  let component: LemakComponent;
  let fixture: ComponentFixture<LemakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LemakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
