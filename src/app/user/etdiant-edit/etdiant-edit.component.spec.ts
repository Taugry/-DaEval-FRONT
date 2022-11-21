import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdiantEditComponent } from './etdiant-edit.component';

describe('EtdiantEditComponent', () => {
  let component: EtdiantEditComponent;
  let fixture: ComponentFixture<EtdiantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtdiantEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdiantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
