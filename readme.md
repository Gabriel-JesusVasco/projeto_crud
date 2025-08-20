# Projeto memoteca
## 📌 Objetivo
O objetivo desse projeto feito por mim (o JavaScript e back-end), é termos um site em que pode-se digitar citações de sua preferência, vale ressaltar que esse projeto foi feito durante as aulas do curso "JavaScript: implementando CRUD com requisições HTTP JavaScript: implementando CRUD com requisições HTTP" da Alura. Nesse projeto usei uma API fake com json-server.


## 🔨 Funcionalidades do projeto:
- Adição de citações: Usando a requisição POST é possível que o usuário digite mais citações de acordo com sua vontade.

- Edição de citação: Com a requisição PUT, pode-se editar a citação, basta clicar no botão com ícone de lápis e os dados irão para o formulário, podendo alterar.

- Remoção de citação: Já com a requisição DELETE, basta clicar na lixeira e a citação será apagada

- Comunicação com arquivo JSON usando axios e JSON-server: Durante todas as requisições optei por usar a biblioteca "Axios" para as requisições, diminuindo linhas de código, com essa api-fake e o JSON-server praticamente simulei um ambiente profissional.

## 🛠 Tecnologias utilizadas
- JavaScript: 
- Biblioteca Axios
- JSON-server
- Node.js 
- HTML e CSS (os recebi prontos pois meu foco é JavaScript, requisições e lógica)

## 🚀 Como rodar localmente

 <strong> Clone o repositório:</strong>
 

``` git clone  ```

<strong>Instale o node.js e o json-server:</strong>

Para executar a api fake do projeto você precisa instalar o node.js (Utilizei v22.17.1) e depois intalar o JSON-server globalmente digitando esse código: <br>
```npm install -g json-server```

<strong>Execute o projeto <strong/>

Para finalmente rodarmos o projeto basta entrarmos na pasta "back_end" usando o terminal do seu editor de código:

``` cd back_end ```

Continuando no terminal digite isso para lançarmos o endpoint:

```npm start```

## Ponto adicional:

Toda vez que você for rodar o projeto precisará dar o comando:

```npm start```

Já que estamos lidando com endpoints.