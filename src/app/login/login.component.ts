import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Http, HttpModule } from '@angular/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    http: Http;
    result: any;
    constructor(public router: Router, http: Http) {
      this.http = http;
    }

    ngOnInit() {
    }

    onLoggedin() {
        this.http.get('http://localhost:8081/sso/findAll', { withCredentials: true }).subscribe(data => this.callback(data) );
    }

    callback(result: any) {
      console.log(JSON.stringify(result));
      alert(result._body);
//      this.router.navigate(['user', 1]);
      if (result) {
          document.location.href = 'http://localhost:4201/dashboard';
      }
    }

}
