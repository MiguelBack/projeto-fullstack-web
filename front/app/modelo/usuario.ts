export class Usuario {
  constructor(
    public _id: string,
    public nome: string,
    public sobrenome: string,
    public apelido: string,
    public email: string,
    public senha: string,
    public funcao: string,
    public imagem: string
  ){}
}