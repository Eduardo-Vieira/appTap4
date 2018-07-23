import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksEditComponent } from './frameworks-edit.component';

describe('FrameworksEditComponent', () => {
  let component: FrameworksEditComponent;
  let fixture: ComponentFixture<FrameworksEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworksEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
