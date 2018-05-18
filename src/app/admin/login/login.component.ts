import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RetrieveDataService } from '../../services/retrieve-data.service';
import { AutheServiceService } from '../../authenticate-service/authe-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public userPassword: string;
  public message: string;
  public checkAuthenticated: string;

  constructor(private router: Router, private service: RetrieveDataService, private auth: AutheServiceService) {
    this.checkAuthenticated = localStorage.getItem("authenticated");
  }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    try {
      this.service.loginService(this.userName, this.userPassword).subscribe(
        (response) => {
          alert(response.status);
          this.auth.sendToken(this.userName);
          this.router.navigate(['/healthyCheck']);
        },
        (error) => {
          this.message = "Wrong Credentials !!";
        }
      );
    }
    catch{
      alert('hellp Exception');
    }
  }

}
