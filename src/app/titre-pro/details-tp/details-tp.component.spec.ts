import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTPComponent } from './details-tp.component';

describe('DetailsTPComponent', () => {
  let component: DetailsTPComponent;
  let fixture: ComponentFixture<DetailsTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
