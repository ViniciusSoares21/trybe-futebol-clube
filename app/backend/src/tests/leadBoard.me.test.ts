import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import LeadBoardService from '../services/leadBoard.service';
import { resultTeamHome, resultTeamAway, resultTeamAwayAndHome } from './mocks/leadBorad';
import Model from '../database/models';
import ITeams from '../interfaces/leaderboard'
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Teste endpoint GET /leaderboard/home', () => {
  describe('Com Sucesso', () => {
    afterEach(() => {
      (Model.query as sinon.SinonStub).restore();
    });
    it('Retornar um array de objetos contendo todos os timesHome e enviar status 200', async () => {
      sinon.stub(Model, 'query').resolves([resultTeamHome, []]);
      const { status, body } = await chai.request(app).get('/leaderboard/home');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(resultTeamHome);
    });
  });

  describe('Com Erro', () => { 
    afterEach(() => {
      sinon.restore();
    });

    it('Retornar um objetos contendo um ERRO e status 500', async () => {
      sinon.stub(Model, 'query').throws(new Error());
      const { status, body } = await chai.request(app).get('/leaderboard/home');
      const message = {
        message: "Erro interno"
      }
      expect(status).to.be.equal(500);
      expect(body).to.be.deep.equal({ message, error: {}});
    });
  });
});

describe('Teste endpoint GET /leaderboard/away', () => {
  describe('Com Sucesso', () => {
    afterEach(() => {
      (Model.query as sinon.SinonStub).restore();
    });

    it('Retornar um array de objetos contendo todos os timesHome e enviar status 200', async () => {
      sinon.stub(Model, 'query').resolves([resultTeamAway, []])
      const { status, body } = await chai.request(app).get('/leaderboard/away');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(resultTeamAway);
    });
  });

  describe('Com Erro', () => { 
    afterEach(() => {
      sinon.restore();
    });

    it('Retornar um objetos contendo um erro e status 500', async () => {
      sinon.stub(Model, 'query').throws(new Error());
      const { status, body } = await chai.request(app).get('/leaderboard/away');
      const message = {
        message: "Erro interno"
      }
      expect(status).to.be.equal(500);
      expect(body).to.be.deep.equal({ message, error: {} });
    });
  });
});

describe('Teste endpoint GET /leaderboard', () => {
  const service = new LeadBoardService()
  describe('Com Sucesso', () => {
    afterEach(() => {
      (sinon).restore();
    });
    it('Retornar um array de objetos contendo todos os timesHome e enviar status 200', async () => {
      sinon.stub(service, 'getClassificationAway').resolves(resultTeamHome as unknown as ITeams[]);
      sinon.stub(service, 'getClassificationHome').resolves(resultTeamAway as unknown as ITeams[])
      const { status, body } = await chai.request(app).get('/leaderboard');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(resultTeamAwayAndHome);
    });
  });

  describe('Com Erro', () => { 
    afterEach(() => {
      sinon.restore();
  
    });
    it('Retornar um objetos contendo um erro e status 500', async () => {
      sinon.stub(Model, 'query').throws();
      const { status, body } = await chai.request(app).get('/leaderboard');
      const message = {
        message: "Erro interno"
      }
      expect(status).to.be.equal(500);
      expect(body).to.be.deep.equal({ message, error: {} });
    });
  });
});