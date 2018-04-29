import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AngularFireDatabase } from 'angularfire2/database';

import { IMyOptions } from '../typescripts/pro/date-picker/index';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent  {
  form: FormGroup;
  form2:FormGroup;
  public myDatePickerOptions: IMyOptions = { 
    dayLabels: {su: 'Son', mo: 'Mon', tu: 'Die', we: 'Mit', th: 'Don', fr: 'Fre', sa: 'Sam'}, 
    dayLabelsFull: {su: "Sonntag", mo: "Montag", tu: "Dienstag", we: "Mittwoch", th: "Donnerstag", fr: "Freitag", sa: "Samstag"}, 
    monthLabels: { 1: 'Jan', 2: 'Feb', 3: 'Mär', 4: 'Apr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Okt', 11: 'Nov', 12: 'Dez' }, 
    monthLabelsFull: { 1: "Januar", 2: "Februar", 3: "März", 4: "April", 5: "Mai", 6: "Juni", 7: "Juli", 8: "August", 9: "September", 10: "Oktober", 11: "November", 12: "Dezember" }
};
  constructor(private fb: FormBuilder, private af:AngularFireDatabase) {
    this.createForm();
  }

  
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone:['',Validators.required],
     address: ['', Validators.required],
     mydate:['',Validators.required],
     mytime:['',Validators.required],
    });
  }
  onSubmit() {
    const {name, email,phone,address, mydate,mytime} = this.form.value;
    
   
    
    let formRequest = { name, email, phone,address, mydate,mytime};
    this.af.list('/Appointments').push(formRequest);
    this.form.reset();
  }

 


}
