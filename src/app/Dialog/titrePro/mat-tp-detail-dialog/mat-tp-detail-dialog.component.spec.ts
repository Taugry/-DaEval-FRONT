import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTPDetailDialogComponent } from './mat-tp-detail-dialog.component';

describe('MatTPDetailDialogComponent', () => {
  let component: MatTPDetailDialogComponent;
  let fixture: ComponentFixture<MatTPDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTPDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTPDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
