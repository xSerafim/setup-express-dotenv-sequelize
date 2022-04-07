O objetivo deste repositório é facilitar as configurações iniciais para exercícios com sequelize, express, mysql.

---

Nas configurações utilizei variáveis de ambiente, preencha o arquivo `.env.example` com suas credenciais, depois renomeie-o para `.env`.

Além das configurações inicias, adicionei também exemplos simples de **migration**, **model**, **seeder**.

---

Para instalar as dependências execute o comando: 
```bash
npm i
```

Caso seu intuito for somente utilizar a configuração de pastas e instalar todas as dependências em um único comando paramos por aqui.

Apenas exclua os arquivos que não for utilizar e boa sorte!

---

Caso queria brincar com ***requisições***, ***banco de dados*** e ***sequelize*** siga os passos abaixo para criar seu banco de dados e adicionar algumas informações nele.

Utilize o comando abaixo para criar o banco de dados:
```bash
npx sequelize db:create
```

Com base no arquivo que está dentro da pasta *migrations*, utilize o comando abaixo para criar a tabela `Users`:
```bash
npx sequelize db:migrate
```

Com base no arquivo que está dentro da pasta *seeder*, utilize o comando abaixo para adicionar dados a tabela `Users`:
```bash
npx sequelize db:seed:all 
```

Agora seu banco de dados já está criado e populado!

Vamos iniciar o *express* para utilizarmos as requisições:
```bash
npm start 
```

---

Pronto agora já é possível fazer requisições, para testarmos a aplicações, temos algumas rotas pré definidas.

A rota `/` retornará um Hello World!

E para interagir com seu banco de dados utilize a rota `/users`, que retornará todos os `users` cadastrados!!

Qualquer dúvida ou ~~quando~~ caso algum problema seja encontrado, entre em contato.

Bons estudos!