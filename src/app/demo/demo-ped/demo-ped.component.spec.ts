import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPedComponent } from './demo-ped.component';

describe('DemoPedComponent', () => {
  let component: DemoPedComponent;
  let fixture: ComponentFixture<DemoPedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoPedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
