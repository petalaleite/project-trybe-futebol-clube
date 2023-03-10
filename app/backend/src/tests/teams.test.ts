import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app'
import { Model } from 'sequelize';
chai.use(chaiHttp);
const { expect } = chai;

describe('Teste de integração a rota teams', function () {
  it('Testa a rota /teams com sucesso', async function () {
    const result = await chai.request(app).get('/teams')
    expect(result.status).to.be.equal(200)
  })

  afterEach(function () {
    sinon.restore()
  })
})