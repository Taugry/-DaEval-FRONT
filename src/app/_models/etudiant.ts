import { Promotion } from './promotion';
export class Etudiant {

  id:number;
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  active:boolean;
  role:string;
  promotions:Promotion[];
  version:number;

  constructor(){
    this.id=0;
    this.firstName= '';
    this.lastName = '';
    this.email= '';
    this.password='';
    this.active=true;
    this.role='';
    this.promotions = new Array();
    this.version=0;
  }
}
