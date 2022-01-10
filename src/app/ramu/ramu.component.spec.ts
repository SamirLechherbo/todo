import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamuComponent } from './ramu.component';

describe('RamuComponent', () => {
  let component: RamuComponent;
  let fixture: ComponentFixture<RamuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
