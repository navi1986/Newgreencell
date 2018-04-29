import { Component } from '@angular/core';
import{AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
 import { ToastService } from './typescripts/pro/alerts';

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})


export class AppComponent {
  user$:Observable<firebase.User>;
  constructor(private afauth:AngularFireAuth,private toastr:ToastService) {
    
    this.user$=afauth.authState;
   
  }
   
login(){
  this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}
logout(){
  this.afauth.auth.signOut();
}
showsucess(){
  this.toastr.success( 'record subittesucecc');
}

}


  
 


