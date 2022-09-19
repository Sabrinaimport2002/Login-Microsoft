import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restricted-page',
  templateUrl: './restricted-page.component.html',
  styleUrls: ['./restricted-page.component.css']
})
export class RestrictedPageComponent implements OnInit {

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
  }

  getName(){
    return this.msalService.instance.getActiveAccount()?.name;
  }

}
