import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPromoConfirmDialogComponent } from './mat-promo-confirm-dialog.component';

describe('MatPromoConfirmDialogComponent', () => {
  let component: MatPromoConfirmDialogComponent;
  let fixture: ComponentFixture<MatPromoConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatPromoConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPromoConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
