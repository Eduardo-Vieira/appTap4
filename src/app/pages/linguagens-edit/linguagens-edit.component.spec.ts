import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagensEditComponent } from './linguagens-edit.component';

describe('LinguagensEditComponent', () => {
  let component: LinguagensEditComponent;
  let fixture: ComponentFixture<LinguagensEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguagensEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagensEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
