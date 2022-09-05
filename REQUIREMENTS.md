## Cadastro de carro

**Requisitos Funcionais**

- [x] Deve ser possível cadastrar um novo carro.

**Regras de Negócio**

- [x] Não deve ser possível cadastrar um carro com uma placa já existente.
- [x] O carro deve ser cadastrado, por padrão, com disponibilidade.
- [x] O usuário responsável pelo cadastro, deve ser um usuário administrador.

## Listagem de carros

**Requisitos Funcionais**

- [x] Deve ser possível listar todos os carros disponíveis.
- [x] Deve ser possível listar todos os carros disponíveis pelo id da categoria.
- [x] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- [x] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regras de Negócio**

- [x] O usuário não precisa estar autenticado no sistema.

## Cadastro de especificação no carro

**Requisitos Funcionais**

- [x] Deve ser possível cadastrar uma especificação para um carro.

**Regras de Negócio**

- [x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [x] Não deve ser possível cadastrar a mesma especificação para o mesmo carro.
- [x] O usuário responsável pelo cadastro, deve ser um usuário administrador.

## Cadastro de imagens do carro

**Requisitos Funcionais**

- [x] Deve ser possível cadastrar a imagem do carro.

**Requisitos Não Funcionais**

- Utilizar o multer para upload dos arquivos.

**Regras de Negócio**

- [x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [x] O usuário responsável pelo cadastro, deve ser um usuário administrador.

## Remover Imagem do Carro

**Requisitos Funcionais**

- [x] Deve ser possível remover uma imagem do carro.

**Regras de Negócio**

- [x] Não deve ser possível remover uma imagem inexistente.
- [x] O usuário tem que estar autenticado para remover uma imagem.
- [x] O usuário responsável pela remoção, deve ser um usuário administrador.

## Aluguel

**Requisitos Funcionais**

- [x] Deve ser possível cadastrar um aluguel.

**Regras de Negócio**

- [x] Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuário.
- [x] Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.
- [x] O aluguel deve ter duração mínima de 24 horas.
- [x] O usuário tem que estar autenticado para cadastrar um novo aluguel.
- [x] Ao realizar um aluguel o status do carro deve ser alterado para indisponível.

## Devolução de Carro

**Requisitos Funcionais**

- [x] Deve ser possível realizar a devolução de um carro

**Regras de Negócio**

- [x] Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- [x] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
- [x] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- [x] Ao realizar a devolução, deverá ser calculado o total do aluguel.
- [x] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- [x] Caso haja multa, deverá ser somado ao total do aluguel.
- [x] O usuário tem que estar autenticado.

## Listagem de Aluguéis para Usuário

**Requisitos Funcionais**

- [x] Deve ser possível realizar a busca de todos os aluguéis para o usuário

**Regras de Negócio**

- [x] O usuário deve estar autenticado.

## Recuperação de Senha

**Requisitos Funcionais**

- [x] Deve ser possível o usuário recuperar a senha informando o e-mail.
- [x] O usuário deve receber um e-mail com o passo a passo para a recuperação de senha.
- [x] O usuário deve conseguir inserir uma nova senha.

**Regras de Negócio**

- [x] O usuário precisa informar uma nova senha.
- [x] O link enviado para a recuperação deve expirar em 3 horas.
