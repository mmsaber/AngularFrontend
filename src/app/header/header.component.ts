import { Component, OnInit } from '@angular/core';
import { AutheServiceService } from '../authenticate-service/authe-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AutheServiceService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
