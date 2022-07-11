## projeto-interfaces-web
# GIT

1.0 - Install

    sudo apt-get install git
    sudo add-apt-repository ppa:git-core/ppa
    sudo apt list --upgradable
    sudo su
    sudo apt update
    apt install git

1.1 - Config

    git config --global user.name "seu nome de usuário"
    git config --global user.email "seu email"

# USE GIT

1.0 - Crie uma nova pasta, abra-a e execute o comando, para criar um novo repositório:

    git init

1.1 - Crie uma cópia de trabalho em um repositório local executando o comando:

    git clone /caminho/para/o/repositório ou diretamente no repositório

1.2 - Propor mudanças:

    git add <arquivo>
    git add --all (Todos)

1.3 - Para realmente confirmar estas mudanças (isto é, fazer um commit), use:

    git commit -m "versão 1.0"

1.4 - Para enviar estas alterações ao seu repositório remoto:

    git push origin master

1.5 - Para atualizar seu repositório local com a mais nova versão, execute:

    git pull

1.6 - Para obter e fazer merge (mesclar) alterações remotas, para fazer merge de um outro branch ao seu branch ativo (ex. master), use:

    git merge <branch>

---