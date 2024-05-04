import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiziComponent } from './gizi.component';

describe('GiziComponent', () => {
  let component: GiziComponent;
  let fixture: ComponentFixture<GiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
