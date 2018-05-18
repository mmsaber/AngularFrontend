import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthy-check',
  templateUrl: './healthy-check.component.html',
  styleUrls: ['./healthy-check.component.css']
})
export class HealthyCheckComponent implements OnInit {

  constructor(private myRoute: Router) {
    alert(this.myRoute.url);

   }

  ngOnInit() {
  }

}
