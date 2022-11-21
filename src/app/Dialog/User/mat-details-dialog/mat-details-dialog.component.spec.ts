import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDetailsDialogComponent } from './mat-details-dialog.component';

describe('MatDetailsDialogComponent', () => {
  let component: MatDetailsDialogComponent;
  let fixture: ComponentFixture<MatDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
