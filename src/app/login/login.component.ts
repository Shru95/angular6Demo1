import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Shruti';
  password = 'Aitawade';

  constructor() { }

  ngOnInit() {
  }

  Login(){
    console.log(this.username + '  ' + this.password);
  }

}
