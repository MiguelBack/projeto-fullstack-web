import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'login',
  templateUrl: './login.Component.html'
})

export class LoginComponent implements OnInit{

  public title: string;

  constructor(){
    this.title = 'Cadastre-se';
  }

  ngOnInit(): void {
    console.log('Çomponente carregado');
  }
}