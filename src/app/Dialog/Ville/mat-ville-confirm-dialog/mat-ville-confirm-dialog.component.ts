import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-ville-confirm-dialog',
  templateUrl: './mat-ville-confirm-dialog.component.html',
  styleUrls: ['./mat-ville-confirm-dialog.component.css']
})
export class MatVilleConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<MatVilleConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

}
