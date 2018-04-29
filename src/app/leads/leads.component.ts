import { Component} from '@angular/core';
import{ DataService}from 'app/data.service'



@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent {
leads$;
  

  
  constructor(private dataService:DataService) 
  {
  this.leads$= this.dataService.getleads();
   }
  
    
   
  
  
  
}
