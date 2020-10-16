import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from "../service/crud.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  errorMessage = "";
  error: {name: string, message: string} = { name: '', message: ''}; //for firebase error hadel

  constructor(private _rought : Router,private curdservice:CrudService) { }

  ngOnInit(): void {
  }

  clearErrorMessage(){
    this.errorMessage = '';
    this.error = {name : '', message: ''};
  }

  gotodashboard()
  {
    this._rought.navigate(['./admin'])
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email , this.password)){
      this.curdservice.loginWithEmail(this.email, this.password).then(() => {
        this._rought.navigate(['/admin'])
      }).catch(_error => {
        this.error = _error
        this._rought.navigate([""])
      })
    }
  }

  public validateForm(email,password)
  {
    if(email.lenght === 0)
    {
      this.errorMessage = "pleace enter email";
      return false;
    }
    if(password.lenght === 0)
    {
      this.errorMessage = "pleace enter password";
      return false;
    }
    if(password.lenght < 6)
    {
      this.errorMessage = "pleace enter password";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
