import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.Component.html'
})

export class CadastroComponent implements OnInit{

  public title: string;

  constructor(){
    this.title = 'Cadastre-se';
  }

  ngOnInit(): void {
    console.log('Componente cadastro carregado...');
  }
}