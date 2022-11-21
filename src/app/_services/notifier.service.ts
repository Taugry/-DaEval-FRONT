import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar: MatSnackBar) { }

  showError(ErrorMessage: string){
    this.snackbar.open(ErrorMessage,'OK',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass:'error'

    })
  }
  showLoginSucces(){
    this.snackbar.open('Login succes','OK',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass:'succes'

    })
  }
  showEditSucces(){
    this.snackbar.open("Modification de l'utilisateur est un succes",'OK',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass:'succes'

    })
  }
  showDeletedOK(str: string){
    this.snackbar.open('La suppression de '+str+' est faite','OK',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass:'deleteOK'

    })
  }
    showDetails(){
      this.snackbar.open('Changes succes','OK',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition:'bottom',
        panelClass:'succes'

      })
  }
}
