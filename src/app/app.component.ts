import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microsoft-login';

  apiResponse!: string;

  constructor(private msalService: MsalService, private httpClient: HttpClient, private loginService: LoginService){}

  isLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount() != null;
  }

  login(){
    this.msalService.loginPopup().subscribe((res: AuthenticationResult) =>{
      this.msalService.instance.setActiveAccount(res.account)
    });
  }

  logout(){
    this.msalService.logout();
  }

  get(){
    this.loginService.get().subscribe(res => {
      this.apiResponse = JSON.stringify(res);
      console.warn("Ok ", res);
    },
    error => console.warn("Error: ", error)
    );
  }
}
