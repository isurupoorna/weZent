import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDriversComponent } from './new-drivers.component';

describe('NewDriversComponent', () => {
  let component: NewDriversComponent;
  let fixture: ComponentFixture<NewDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
