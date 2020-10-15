import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _rought : Router) { }

  ngOnInit(): void {
  }

  gotodashboard()
  {
    this._rought.navigate(['./dashboard'])
  }

}
