REGRAS DE NEGOCIO

- TELA DE LOGIN
  - Usuario informa usuário e senha
  - Usuario clica no botão entrar
  - Usuario é redecionado para tela de
  - Caso usuário ou senha invalida exibir mensagem de alerta

## • TELA DE FILIAIS

- Ao acessa a tela exibir lista das filiais cadastradas, segue abaixo a estrutura
  desta:

## [ ID | NOME_FILIAL | TOTAL DE FUNCIONARIOS | AÇÃO ]

```
ID – representa o id da filial
```

```
NOME_FILIAL – representa o nome desta filial (ex: Cabelex Unidade 1 )
```

```
TOTAL DE FUNCIONARIOS – representa a quantidade de funcionários
vinculadas a esta filial
```

```
AÇÃO – terá três botões :
```

```
ver_funcionarios – ao clicar abrirá uma modal exibindo os
funcionários vinculados a esta filial
```

```
excluir – ao clicar excluir filial
```

```
editar – exibir modal para editar os dados da filial
```

- Esta tela deverá conter um botão de ADICIONAR filial, ao clicar neste botão
  exibir modal para cadastro de filial
- MODAL DE FILIAIS – Cadastro
- Terá 1 input de texto para informar o nome filial e 1 botão para criar filial
- Ao criar nova filial, fechar modal e executar passo 2.a.
- MODAL DE FILIAIS – Edição
- Ao acessar a carregar as informações em tela:

```
NOME_FILIAL – apresentar dado em tela ( editável )
```

```
TOTAL DE FUNCIONARIO – apresentar dado em tela ( não editável )
```

```
BOTÃO DE EDITAR – ao clicar neste botão os dados da filial deve ser alterada
para os dados editados e executar o passo 2.a.
```

## • TELA DE FUNCIONARIOS

- Ao acessa a tela exibir lista das filiais cadastradas, segue abaixo a estrutura
  desta:

## [ ID | NOME_FUNCIONARIO | NOME_FILIAL | AÇÃO ]

```
ID – representa o id do funcionário
```

```
NOME_ FUNCIONARIO – representa o nome do funcionário
```

```
NOME_FILIAL – representa o nome da filial na qual este funcionário esta
vinculado ( 1 funcionário pode pertencer somente a 1 filial, mas 1 filial
pode ter mais de 1 funcionário)
```

```
AÇÃO – terá dois botões :
```

```
excluir – ao clicar excluir funcionário
```

```
editar – exibir modal para editar os dados do funcionário
```

- Esta tela deverá conter um botão de ADICIONAR funcionário, ao clicar neste
  botão exibir modal para cadastro de funcionário
- MODAL DE FUNCIONARIOS – Cadastro
- Esta modal deve conter:

```
NOME_FUNCIONARIO – input para informar o nome do funcionário
```

```
FILIAL – input para selecionar o nome da filial
```

```
BOTAO_SALVAR – botão para adicionar novo funcionário, ao clicar
fechar modal e executar o passo 5.a
```

- MODAL DE FUNCIONARIOS – Edição
  - Ao acessar a carregar as informações em tela:

```
NOME_FUNCIONARIO – ( editável )
```

```
FILIAL – input para selecionar o nome da filial ( editável )
```

```
BOTAO_SALVAR – botão para adicionar novo funcionário, ao clicar
fechar modal e executar o passo 5.a
```
