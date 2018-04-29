import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {
  form: FormGroup;
  constructor(private fb: FormBuilder, private af:AngularFireDatabase) {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone:['',Validators.required],
      postcode: ['', Validators.required],
      bill:['',Validators.required],
      message:['',Validators.required]
    });
  }
  onSubmit() {
    const {name, email,phone,postcode,bill, message} = this.form.value;
    const date = Date();
   
    
    let formRequest = { name, email, phone,postcode,bill, date,message};
    this.af.list('/FLeads').push(formRequest);
    this.form.reset();
  }
}