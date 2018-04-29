import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastService } from '../typescripts/pro/alerts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

   form1:FormGroup;
  constructor(private fb: FormBuilder, private af:AngularFireDatabase, private toast:ToastService) {

    this.createForm();
    }
  createForm() {
    this.form1 = this.fb.group({
      name1: ['', Validators.required],
      email1: ['', Validators.required],
      phone1:['',Validators.required],
     address1: ['', Validators.required]
     
    });
  }
  onSubmit() {
    const {name1, email1,phone1,address1} = this.form1.value;
        
        let formRequest = { name1, email1, phone1,address1};
        this.af.list('/Leads').push(formRequest);
          this.form1.reset();
        this.toast.success( 'Your data submitted successfully to greencel ');

  }
 
  

 
}
