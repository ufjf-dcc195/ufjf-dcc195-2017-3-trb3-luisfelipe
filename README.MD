# TRB3 - Laboratório de Programação Web III
1. Luis Felipe de Almeida Nascimento 201466677C
   Ciêcia da Computação
   luis.felipe.almeida.nascimento@gmail.com 

2. [Link do projeto!](https://trab3-web3-luisfelipe.herokuapp.com/)

3. Crie um uma aplicação utilizando o node.js seguindo as seguintes restrições:

- [x] Utilize o módulo express para roteamento;
- [x] Utilize o módulo ejs para template da páginas;
- [ ] Utilize o módulo mongoose para persistência via mongodb;
- [x] Crie uma estrutura de roteamento e tratadores de requisição para toda a aplicação conforme o material de aula;
- [x] Adicione um ponto de entrada para “/index.html” e “/” com uma lista de endereços para as demais questões;
- [ ] Forneça arquivos CSS e imagens via serve-static;
- [x] Adicione um ponto de entrada para “/sobre.html” com uma página contendo os dados dos integrantes da dupla com nome completo, número de matrícula, e-mail e curso.
- [x] Adicione um arquivo README.md na raiz do projeto contendo os mesmos dados como nome completo, número de matrícula, e-mail e curso.
- [ ] Crie um site de compra e venda de mercadorias artesanais que o preço base do produto siga a lei da oferta e da procura: produtos mais desejados possuem um preço maior.
O sistema deve:
- [ ] Permitir a manutenção (busca, cadastro, edição e exclusão) de produtos, cada um contendo um nome e um preço base.
- [ ] Permitir a manutenção de clientes, contendo um nome e e-mail de contato. Não necessário fazer login, mas deve-se guardar/alterar o usuário atual na sessão atual.
- [ ] Permitir a manutenção de interesses dos clientes sobre os produtos: cada cliente pode atribuir um valor de interesse sobre o produto: 0/inexistente - sem interesse, 1 - baixo interesse, 2 - tenho interesse e 3 - muito interessado.
- [ ] Liste os produtos com o ajuste de preço: o que tiver a maior soma simples de interesse recebe um ajuste de 100% sobre o preço base. Os demais devem ser calculados com uma proporção em relação ao maior.

