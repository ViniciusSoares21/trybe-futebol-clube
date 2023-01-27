import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { expectedResult, expectedResultId  } from './mocks/teams';
import Teams from '../database/models/Teams';
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Teste endpoint /teams', () => {
  afterEach(() => {
    (sinon).restore();
  });

  describe('Com Sucesso', () => {
    it('Retornar um array de objetos contendo todos os times e enviar status 200', async () => {
      sinon.stub(Teams, 'findAll').resolves(expectedResult as unknown as Teams[] );
      const { status, body } = await chai.request(app).get('/teams');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(expectedResult);
    });
  });

  describe('Com Erro', () => { 
    it('Retornar um objetos contendo menssage de ERRO e status 500', async () => {
      sinon.stub(Teams, 'findAll').throws(new Error());
      const { status, body } = await chai.request(app).get('/teams');
  
      expect(status).to.be.equal(500);
      expect(body).to.be.deep.equal({ message: 'Erro interno', error: {} });
    });
  });
});

describe('Teste endpoint /teams:id', () => {
  describe('Com Sucesso', () => {
    afterEach(() => {
      (sinon).restore();
    });
    it('Retornar um objetos contendo o time correto e enviar status 200', async () => {
      sinon.stub(Teams, 'findOne').resolves(expectedResultId as unknown as Teams );
      const { status, body } = await chai.request(app).get('/teams/:id');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(expectedResultId);
    });
  });

  describe('Com Erro', () => { 
    afterEach(() => {
      sinon.restore();
    });
    it('Retornar um objetos contendo uma menssagem de erro e enviar status 500', async () => {
      sinon.stub(Teams, 'findOne').throws(new Error());
      const { status, body } = await chai.request(app).get('/teams/:id');
  
      expect(status).to.be.equal(500);
      expect(body).to.be.deep.equal({ message: 'Erro interno', error: {} });
    });
  });
});

