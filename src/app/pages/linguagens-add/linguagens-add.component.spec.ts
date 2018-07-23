import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagensAddComponent } from './linguagens-add.component';

describe('LinguagensAddComponent', () => {
  let component: LinguagensAddComponent;
  let fixture: ComponentFixture<LinguagensAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguagensAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagensAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
