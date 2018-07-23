import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksDetailComponent } from './frameworks-detail.component';

describe('FrameworksDetailComponent', () => {
  let component: FrameworksDetailComponent;
  let fixture: ComponentFixture<FrameworksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
