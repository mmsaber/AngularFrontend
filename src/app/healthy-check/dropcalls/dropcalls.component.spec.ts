import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropcallsComponent } from './dropcalls.component';

describe('DropcallsComponent', () => {
  let component: DropcallsComponent;
  let fixture: ComponentFixture<DropcallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropcallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropcallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
