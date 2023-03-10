import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app'
chai.use(chaiHttp);
const { expect } = chai;

describe('Teste de integração da rota /login', function () {
  it('A rota /login devolve um erro de "Bad Request" ao tentar fazer um post sem corpo de requisição', async function () {
    const result = await chai.request(app).post('/login').send()
    expect(result.status).to.be.equal(400)
  })
   it('Retorna um erro quando a senha é menor que 6 caracteres', async function () {
    const invalidPassword = { email: 'admin@admin.com', password: '123'}
    const result = await chai.request(app).post('/login').send(invalidPassword)
    expect(result.status).to.be.equal(401)
   })
   
  afterEach(function () {
    sinon.restore()
  })
})