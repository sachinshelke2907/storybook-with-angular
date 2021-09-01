import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBandComponent } from './blue-band.component';

describe('BlueBandComponent', () => {
  let component: BlueBandComponent;
  let fixture: ComponentFixture<BlueBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
