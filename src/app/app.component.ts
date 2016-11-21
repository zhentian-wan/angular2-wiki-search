import {Component} from '@angular/core';
import {AuthService} from "./shared/auth/AuthService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  authInfo$;
  constructor(private auth: AuthService){
      this.auth.authInfo$.subscribe(
        res => {
          this.authInfo$ = res;
        }
      )
  }

  logout(){
    this.auth.logout();
  }
}
