import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeotestComponent } from './neotest.component';

describe('NeotestComponent', () => {
  let component: NeotestComponent;
  let fixture: ComponentFixture<NeotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
