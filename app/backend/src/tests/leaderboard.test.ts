import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app'
chai.use(chaiHttp);
const { expect } = chai;

describe('Teste de integração da rota /leadreboard', function () {
  it('Retorna a rota /leaderboard/home com sucesso', async function () {
    const result = await chai.request(app).get('/leaderboard/home')
    expect(result.status).to.be.equal(200)
  })

  afterEach(function () {
    sinon.restore()
  })
})