import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DipretreatMenuComponent} from './dipretreat-menu.component';

describe('DipretreatMenuComponent', () => {
  let component: DipretreatMenuComponent;
  let fixture: ComponentFixture<DipretreatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DipretreatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DipretreatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
