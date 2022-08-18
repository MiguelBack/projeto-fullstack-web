## Acessar a pasta front

cd front

## Caso tenhamos Angular podemos desinstalar com os seguintes comandos:

npm uninstall -g angular-cli
npm uninstall -g @angular-cli

## Comando para esvaziar o cache de pacotes npm

npm cache clean

## Instalar a ultima versão do Angular CLI

npm install -g @angular/cli

## Gerando o projeto Angular

ng new NOME DO SEU PROJETO
cd NOME DO SEU PROJETO
ng serve

## Instalação das bibliotecas na pasta front (Angular)

"bootstrap": "",
"jQuery": "^3.6.0"

## Executar comando

npm update (atualizar nossas dependências)
npm start (testar se não há erros)

## Edição no arquivo angular.json para o bootstrap e jquery

"script": [
    ../node_modules/jquery/dist/jquery.min.js,
    ../node_modules/bootstrap/dist/js/bootstrap.min.js
]

## Edição no arquivo angular.json

"styles":[
    ../node_modules/bootstrap/dist/css/bootstrap.min.css
]

## Configurar jQuery para aceitar variáveis ($)

acessar o arquivo typings.d.ts

