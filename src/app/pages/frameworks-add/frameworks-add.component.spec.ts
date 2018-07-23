import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksAddComponent } from './frameworks-add.component';

describe('FrameworksAddComponent', () => {
  let component: FrameworksAddComponent;
  let fixture: ComponentFixture<FrameworksAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworksAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
