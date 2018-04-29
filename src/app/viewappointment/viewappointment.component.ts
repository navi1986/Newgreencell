import { Component } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.scss']
})
export class ViewappointmentComponent  {

 appoint$;
  

  
  constructor(private dataService:DataService) 
  {
  this.appoint$= this.dataService.getappointments();
   }

}
