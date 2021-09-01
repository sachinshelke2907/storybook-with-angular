import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSingleSelectComponent } from './simple-single-select.component';

describe('SimpleSingleSelectComponent', () => {
  let component: SimpleSingleSelectComponent;
  let fixture: ComponentFixture<SimpleSingleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSingleSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSingleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
