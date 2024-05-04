import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarboComponent } from './karbo.component';

describe('KarboComponent', () => {
  let component: KarboComponent;
  let fixture: ComponentFixture<KarboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
