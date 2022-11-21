import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatVilleDetailDialogComponent } from './mat-ville-detail-dialog.component';

describe('MatVilleDetailDialogComponent', () => {
  let component: MatVilleDetailDialogComponent;
  let fixture: ComponentFixture<MatVilleDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatVilleDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatVilleDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
