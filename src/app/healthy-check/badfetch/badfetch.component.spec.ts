import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadfetchComponent } from './badfetch.component';

describe('BadfetchComponent', () => {
  let component: BadfetchComponent;
  let fixture: ComponentFixture<BadfetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadfetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
