import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamirComponent } from './samir.component';

describe('SamirComponent', () => {
  let component: SamirComponent;
  let fixture: ComponentFixture<SamirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
