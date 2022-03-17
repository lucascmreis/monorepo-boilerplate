<!-- PROJECT LOGO -->
# Monorepo Boilerplate with ReactJS client and Node.js server

<br />

## About
This is boilerplate repository,  for fast and easy way to start you monorepo project with ReactJS and Node.js.

### Technologies

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Yarn Workspaces](https://yarnpkg.com/features/workspaces/)

<!-- GETTING STARTED -->

## How to use

### Install

1. Clone this repository
   ```sh
   git clone http://gitlab.internal.b2w.io/team/catalogo/spacey/spacey.git
   ```
2. Configure a versão do node
   ```sh
   nvm use
   ```
3. Instale as dependências
   ```sh
   yarn
   ```

### Iniciar o projeto

> Todos comandos listados são a partir do diretório root do monorepo. Aquele com o package.json principal.

**Em ambiente de desenvolvimento**

1. Inicie o Backend

   ```sh
    yarn dev-server
   ```

2. Inicie o Frontend

   ```sh
    yarn dev-dashboard
   ```

3. Acesse o Dashboard: `http://localhost:3000/`

**Em ambiente de produção**

1. Realizar o build do dashboard

   ```sh
    yarn build-dashboard
   ```

2. Servir o dashboard a partir do backend`

   ```sh
    yarn start
   ```

3. Acesse o Dashboard: `http://localhost:8000/`


> Para servir o build do dashboard, sem o backend

1. Servir o build do dashboard a partir do `serve -s build`

   ```sh
    yarn start-dashboard
   ```

2. Acesse o Dashboard: `http://localhost:5000/`

<p align="right">(<a href="#top">back to top</a>)</p>

### Test & Linting

> Este projeto utiliza o Jest para testes automatizados e o Eslint + Prettier para regras de lintig

**Testes**

1. Para iniciar testes no frontend (dashboard)

   ```sh
    yarn test:dashboard
   ```

2. Para iniciar testes no backend (server)

   ```sh
    yarn test:server
   ```

3. Para iniciar testes nos dashboard e no server, simultaneamente

   ```sh
    yarn test:all
   ```

4. Para iniciar testes com o coverage-report

   ```sh
    yarn test:dashboard-coverage
   ```

    ```sh
      yarn test:server-coverage
    ```

    ```sh
      yarn test:all-coverage
    ```

**Linting**

1. Para iniciar a varredura na base de código com o ESLINT

   ```sh
      yarn lint
   ```

2. Para iniciar as correções com o ESLINT

   ```sh
    yarn lint:fix
   ```

3. Para iniciar as correções na base de código com o PRETTIER

   ```sh
    yarn prettier:fix-all
   ```

<p align="right">(<a href="#top">back to top</a>)</p>
## Padrões de Projeto

### Workflow

1. Uma nova tarefa é solicitada ou indicada na Sprint
2. Criar uma nova branch, a partir da `develop`
   - O nome da branch por padrão segue o `tipo de modificaçao`/`codigo do sprint`
3. Realizar as alterações no código
4. Revisar código ( lint, remover console.log, etc)
5. Realizar testes ( automatizados, quando houver)
6. Commit(atentar para o padrão de mensagem)
7. Push

   ```bash
   git push
   ```

8. Abrir um Merge Request no Gitlab, preenchendo o template
  > Lembre-se de realizar o squash para Merge Requests na develop.
9. Esperar a aprovação do time para que seja feito o merge, com o targe sempre na develop. (exceto hotfix)
10. Fazer o merge da branch

   >  A fim de minimizar merges e também commits de merge, realizar o rebase. É interessante usar o seguinte comando:

   ```bash
   git config --global pull.rebase true
   ```


### Padrões de commit

```sh
feat: Adicionando galeria de imagem - SPAC-123
```

**Tipos de commit**

- `feat`: Uma nova feature
- `fix`: Correção de bugs
- `docs`: Mudança na documentação
- `style`: Alterações que não afetem o sentido do código(white-space, formatting, missing semi-colons, etc)
- `refactor`: Refatoração de código
- `test`: Adição de testes
- `build`: Configuração de build do projeto
- `ci`: Configuração de integração contínua
- `chore`: Mudanças que não afetem o código ou os testes
- `config`: Mudanças na configuração do projeto
<p align="right">(<a href="#top">back to top</a>)</p>

## Conheça mais

O time do Spacey mantém uma documentação com todo o conhecimento técnico sobro o projeto: Procedimentos, boas práticas, lições aprendidas e muito mais! [Conheça o nosso wiki](http://gitlab.internal.b2w.io/team/catalogo/spacey/spacey/-/wikis/home).

<p align="right">(<a href="#top">back to top</a>)</p>
