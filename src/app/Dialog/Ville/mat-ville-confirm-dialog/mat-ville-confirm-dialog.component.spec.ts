import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatVilleConfirmDialogComponent } from './mat-ville-confirm-dialog.component';

describe('MatVilleConfirmDialogComponent', () => {
  let component: MatVilleConfirmDialogComponent;
  let fixture: ComponentFixture<MatVilleConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatVilleConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatVilleConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
