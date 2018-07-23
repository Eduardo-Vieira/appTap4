import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLinguagensAddComponent } from './dialog-linguagens-add.component';

describe('DialogLinguagensAddComponent', () => {
  let component: DialogLinguagensAddComponent;
  let fixture: ComponentFixture<DialogLinguagensAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLinguagensAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLinguagensAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
