import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggplantComponent } from './eggplant.component';

describe('EggplantComponent', () => {
  let component: EggplantComponent;
  let fixture: ComponentFixture<EggplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
