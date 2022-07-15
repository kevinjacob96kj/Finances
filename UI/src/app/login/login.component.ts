import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService) { }


  ngOnInit(): void {
    
  }
  
  submit(data: any) {
    var val = {user: data.username, password: data.password};
    var x = this.service.loginverify(val).subscribe()
    console.log(x)
  }
}
