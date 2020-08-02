## ALGUNS COMANDO DO GIT BASH

Para cadastrar nome: **git config --global user.name**

Para cadastrar email: **git config --global user.email**

---

## NAVEGAR ENTRE PASTAS

Para entrar na pasta raiz: **cd C:/NOMEDAPASTA**

Para entrar em pastas: **cd NOMEDAPASTA**

Para voltar um diretorio: **cd ../**

Para saber o que tem nas pastas: **ls**

---

## Comandos

**git status**
**git pull**
**git add -A ou git commit -am "frase"** <<- Para adicionar e já fazer o commit
**git commit -m "frase de identificação"** ou **git commit -am "frase"** <<- Para adicionar e já fazer o commit
**git push origin master**

---

## COMANDO DE LIMPAR A TELA

**clear**

---

## COMANDO PARA VER O HITSORICO

git log e numero de identificação do commit

---

## REVERTENDO MODIFICAÇÕES

**git reset --soft numerodocommit** _(volta para um estado antes do commit e já preparado para commitar)_
**git reset --mixed numerodocommit** _(volta para um estado antes do commit e porem não esta preparado para commitar, tem q da o git add)_
**git reset --hard numerodocommit** _(volta para o ultimo commit)_

---

## COMANDO DE CRIAR PASTA

**cd Desktop/**

**mkdir nomedapasta**

Para entrar na pasta: **cd nomedapasta/**

---

## COMANDO PARA TROCAR DE BRANCH

**git checkout NOMEDABRANC**

Para saber todos os commits na branch: **git log**

Para saber todos os branch: **git branch**

---

## COMANDO PARA CLONAR UM PROJETO

1º Temos que criar uma "pasta" dentro do nosso servidor. Ex: ModuloJs

2º Vá ao github e copie a URL da pagina do projeto.

3º Entre na pasta atravez do git bash e dentro da pasta execute o comando: git clone urldoprojeto

4º Espere a conclusão da clonagem e dê o comando git log para saber os commits que foram realizados.

---

## CRIANDO UM BRANCH E FAZENDO UM MERGE

1º Entre em seu diretorio local pelo git bash

2º Dentro do seu diretorio, execute o comando: "git checkout -b _nome da branch_ aperte "enter"

3º Pronto foi criada a nova branch, apartir de agora todas as modificações e todos os commits ficaram dentro dessa nova branch.

- nessa branch vc pode usar todos os comandos normais, ex:
- git status
- git add .
- git commit -m "frase do commit"
- ATENÇÃO: na hora de enviar as modificações para o repositorio remoto, vc tem que inserir o nome da branch nova. Ex: se vc tem 2 branchs, branch-prod, e branch-dev. Se as modificações forem feitas na "branch-dev" o comando para enviar as modificações é: git push -u origin branch-dev. Ou seja, basta mudar a origem, entendeu?

4º Fazendo um Merge (unindo as modificações): Para isso, voce tem que está dentro da branch padrão. Para mudar de branch, comando: git checkout master "aperte enter".

Unindo as branchs, comando: git merge _nomeDaDranchDeDesenvolvimento_

Para enviar as moficações para o repositorio remoto, basta "adicionar as modificações, commitar" e usar o comando: git push -u origin master
