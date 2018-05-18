import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyCheckComponent } from './healthy-check.component';

describe('HealthyCheckComponent', () => {
  let component: HealthyCheckComponent;
  let fixture: ComponentFixture<HealthyCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
