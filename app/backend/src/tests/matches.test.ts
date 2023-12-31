import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app'
chai.use(chaiHttp);
const { expect } = chai;

describe('Teste de integração da rota /matches', function () {
  it('Retorna a rota /matches com sucesso', async function () {
        const result = await chai.request(app).get('/matches')
    expect(result.status).to.be.equal(200)
  })

  afterEach(function () {
    sinon.restore()
  })
})