import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService, private router: Router) { }

  
  ngOnInit(): void {
    
  }

  submit(data: any) {
    this.service.loginverify(data).subscribe(resp=>{
    console.log(resp[0].active)  
    if(resp[0].active >= 1)
    {
      this.router.navigateByUrl('/Sample');
    }
    else{
      const currentRoute = this.router.url;
      this.router.navigateByUrl('/Login', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);});}
   });
  }
}
