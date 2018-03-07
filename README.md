# desafio-passei-direto

##O que foi feito:
* Inserir novos discos em uma coleção;
* Editar informações sobre os discos;
* Listar todos os discos de uma coleção;


##Estrutura de banco de dados
O banco de dados é composto por três entidades: colecao, discos e colecao_discos.

```
CREATE DATABASE `desafio-passei-direto`;

CREATE TABLE `colecao` (
  `idcolecao` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`idcolecao`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE `discos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `interprete` varchar(45) NOT NULL,
  `ano` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

CREATE TABLE `colecao_discos` (
  `idcolecao` int(11) NOT NULL,
  `iddisco` int(11) NOT NULL,
  PRIMARY KEY (`idcolecao`,`iddisco`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

```

Com a estrutura do banco de dados criada, procure o arquivo database/connectionFactory.js para editar os dados de conexão ao banco de dados local.

## Iniciando os testes
A primeira etapa do processo é criar uma coleção em http://localhost:5000/nova-colecao

Após criar uma coleção, você pode visualizar as coleções cadastradas em http://localhost:5000/colecoes

Ao clicar em "ver detalhes", você terá a opção de adicionar discos. Clicando em adicionar disco, você cadastrará um disco que ficará associada a coleção que estava sendo visualizada.

Também em detalhes de coleções, caso já tenham discos cadastrados, é possível editar as informações do disco