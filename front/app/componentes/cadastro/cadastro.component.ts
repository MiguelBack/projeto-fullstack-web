import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Usuario } from "modelo/usuario";
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.Component.html'
})

export class CadastroComponent implements OnInit{

  public title: string;
  // DECLARAÇÃO DO OBJETO USUÁRIO
  public usuario: Usuario;

  constructor(
    // CONFIGURAÇÃO DAS PROPRIEDADES DAS ROTAS PARA DEFINIR AS CLASSES
    private _rota: ActivatedRoute,
    private _rotas: Router
  ){
    this.title = 'Cadastre-se';
    // DECLARAÇÃO DE PROPRIEDADE VAZIA, PARA RECEBER VALORES DO FORMULÁRIO
    this.usuario = new Usuario(
      "",
      "",
      "",
      "",
      "",
      "",
      "FUNCAO_USUARIO",
      ""  
    )
  }

  ngOnInit(): void {
    console.log('Componente cadastro carregado...');
  }
}