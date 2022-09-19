import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'registro',
  templateUrl: './registro.Component.html'
})

export class RegistroComponent implements OnInit{

  public title: string;

  constructor(){
    this.title = 'Cadastre-se';
  }

  ngOnInit(): void {
    console.log('Componente carregado...');
  }
}