import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-promo-confirm-dialog',
  templateUrl: './mat-promo-confirm-dialog.component.html',
  styleUrls: ['./mat-promo-confirm-dialog.component.css']
})
export class MatPromoConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<MatPromoConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

}
