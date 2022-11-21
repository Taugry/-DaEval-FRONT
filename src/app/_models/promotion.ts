import { Etudiant } from './etudiant';
export class Promotion {

  id:number;
  dateDebut:Date;
  dateFin:Date;
  titreProfessionnelId:number;
  titreProfessionnelTitre:string;
  villeId:number;
  villeNom:string;
  etudiants:Etudiant[];
  version:number;

  constructor(){
    this.id=0;
    this.dateDebut= new Date();
    this.dateFin = new Date(0,0,0);
    this.titreProfessionnelId=0;
    this.titreProfessionnelTitre='';
    this.villeId=0;
    this.villeNom='';
    this.etudiants = new Array();
    this.version=0;
  }
}
