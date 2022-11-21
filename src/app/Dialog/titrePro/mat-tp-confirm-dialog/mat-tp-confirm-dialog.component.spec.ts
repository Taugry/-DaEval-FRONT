import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTPConfirmDialogComponent } from './mat-tp-confirm-dialog.component';

describe('MatTPConfirmDialogComponent', () => {
  let component: MatTPConfirmDialogComponent;
  let fixture: ComponentFixture<MatTPConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTPConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTPConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
