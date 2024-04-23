<summary><strong>Como rodar</strong></summary></br>

  **Docker:**

**:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.

npm run compose:up na raiz do projeto;

npm run install:apps na raiz do projeto para instalar dependências do front e back-end;

docker exec -it app_backend bash em ./app/backend;

npm run build no container do backend;

npm run db:reset no container do backend;

**Localmente:**

Necessita ter um banco de dados(MySql) instalado localmente

npm run install:apps na raiz do projeto para instalar dependências do front e back-end;
npm run compose:up na raiz do projeto;
npm run build;
npm run db:reset;
