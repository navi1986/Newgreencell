import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';

@Injectable()
export class DataService {
 constructor(public db:AngularFireDatabase) { }
  getleads()
  {
     return this.db.list('Leads').valueChanges();
   
   }
   getappointments(){
    return this.db.list('Appointments').valueChanges();
   }
   
 
}
