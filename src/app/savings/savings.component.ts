import { Component } from '@angular/core';



@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent {

   bill:any;
   systs:any;
    public newbill:any;
    public teny:any;
  public chartType:string = 'line';
        
    public chartDatasets:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
    ];

    public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    public chartColors:Array<any> = [
        {
            backgroundColor: '#ffbb33',
            borderColor: 'black',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: '#ff4444',
            borderColor: 'black',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions:any = { 
        responsive: true
    };

    public chartClicked(e: any): void { 
         console.log(e);
    } 
    
    public chartHovered(e: any): void { 
      console.log(e);
    }
    
    cal(bill){
      this.bill=bill;
    this.newbill=this.bill/2;
    if(this.bill<500&&this.bill>0)
    {
  this.systs="3KW";
}
    if(this.bill>500&&this.bill<700)
    {
      this.systs="5KW";
    }
      
    if(this.bill>700&&this.bill<1500)
    {
      this.systs="10KW"
    }
   if(this.bill>1500)
    {
      this.systs="Book consultation";
    }
   
     
    }

}
   



