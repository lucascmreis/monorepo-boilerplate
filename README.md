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
   git clone https://github.com/lucascmreis/monorepo-boilerplate.git
   ```
3. Install dependencies in all packages
   ```sh
   yarn
   ```

### Run

> All commands listed below is at the root directory.

1. Start server

   ```sh
    yarn workspace @monorepo/server start
   ```

2. Start client

   ```sh
    yarn workspace @monorepo/client start
   ```

3. Access the react client: `http://localhost:3000/`

4. Access the react client: `http://localhost:8000/`
