# teste_react_node_back
aplicação back-end referente ao testo do curse educa

Clone o repositório
git clone git@github.com:danielpordeusg/teste_react_node_back.git;

Entre na pasta do repositório que você acabou de clonar:

cd teste_react_node_back
Instale as dependências [Caso existam]
npm install

------------------------------------------------------------------------

 PASSOS DE CONFIGURAÇÃO

1 - suba um container docker usando o comando docker run --name mysql -p 12010:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5

2 - set suas variaveis de ambiente com .env e receba elas na connection

3 - rode o serve com npm run dev na porta 3001. caso alguma porta esteja sendo usada vocẽ pode altera pra funcionar

4 - Com o servidor Up vocẽ já pode ir pra o front end  

extras: 

*feito com Typescript*
