import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPromoDetailDialogComponent } from './mat-promo-detail-dialog.component';

describe('MatPromoDetailDialogComponent', () => {
  let component: MatPromoDetailDialogComponent;
  let fixture: ComponentFixture<MatPromoDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatPromoDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPromoDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
