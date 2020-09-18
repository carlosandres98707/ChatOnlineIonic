import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import {Router  } from "@angular/router";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public nombre:string;
  public email:string;
  public password:string;
  public confirpassword:string;
  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
this.auth.register(this.email,this.password,this.confirpassword,this.nombre).then(auth =>{
  this.router.navigate(['home']);
  console.log(auth)
}).catch( erro => console.log(erro))
  }
}
