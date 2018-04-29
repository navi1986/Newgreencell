import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{AngularFireAuthModule} from 'angularfire2/auth'
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { environment } from 'environments/environment';
import { LeadsComponent } from './leads/leads.component';
import { DataService } from 'app/data.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { SalesrepComponent } from './salesrep/salesrep.component';
import { SavingsComponent } from 'app/savings/savings.component';
import { PriceComponent } from './price/price.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    LeadsComponent,
    AppointmentsComponent,
    ViewappointmentComponent,
    SalesrepComponent,
   SavingsComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    RouterModule.forRoot([
//genral pages
{ path:'home', component:HomeComponent},
    {path:'contact-us',component:ContactComponent},
    {path:'Leads',component:LeadsComponent},
    {path:'Book-appointments',component:AppointmentsComponent},
    {path:'Scehduled-appointments',component:ViewappointmentComponent},
    {path:'savings',component:SavingsComponent},
    {path:'Get-Price',component:PriceComponent},
     {path:'sales-rep',component:SalesrepComponent}

    ])
  ],
  providers: [MDBSpinningPreloader
  ,DataService
],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
