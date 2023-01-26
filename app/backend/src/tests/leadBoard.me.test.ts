import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import * as leadBoardService from '../database/services/leadBoard.service';
import { resultTeamHome, resultTeamAway, resultTeamAwayAndHome } from './mocks/leadBorad';
import Model from '../database/models';
import ITeams from '../database/interfaces/leaderboard'
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

/* before(() => consoleLogStub.returns(true));
after(() => consoleLogStub.restore()); */

describe('Teste endpoint GET /leaderboard/home', () => {
  describe('Com Sucesso', () => {
    beforeEach(() => {
      sinon.stub(Model, 'query').resolves(resultTeamHome as [unknown[], unknown] | undefined);
    });
  
    afterEach(() => {
      (Model.query as sinon.SinonStub).restore();
    });
    it('Retornar um array de objetos contendo todos os timesHome e enviar status 200', async () => {
      const { status, body } = await chai.request(app).get('/leaderboard/home');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(resultTeamHome);
    });
  });

  describe('Com Erro', () => { 
    beforeEach(() => {
      sinon.stub(leadBoardService, 'getClassificationHome').throws();
    });
  
    afterEach(() => {
      (leadBoardService.getClassificationHome as sinon.SinonStub).restore();
  
    });
    it('Retornar um objetos contendo um erro e status 500', async () => {
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
    beforeEach(() => {
      sinon.stub(Model, 'query').resolves(resultTeamAway as [unknown[], unknown] | undefined);
    });
  
    afterEach(() => {
      (Model.query as sinon.SinonStub).restore();
    });
    it('Retornar um array de objetos contendo todos os timesHome e enviar status 200', async () => {
      const { status, body } = await chai.request(app).get('/leaderboard/away');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(resultTeamAway);
    });
  });

  describe('Com Erro', () => { 
    beforeEach(() => {
      sinon.stub(leadBoardService, 'getClassificationAway').throws();
    });
  
    afterEach(() => {
      (leadBoardService.getClassificationAway as sinon.SinonStub).restore();
  
    });
    it('Retornar um objetos contendo um erro e status 500', async () => {
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
  describe('Com Sucesso', () => {
    beforeEach(() => {
      sinon.stub(leadBoardService, 'getClassificationAway').resolves(resultTeamHome as unknown as ITeams[]);
      sinon.stub(leadBoardService, 'getClassificationHome').resolves(resultTeamAway as unknown as ITeams[]);
    });
  
    afterEach(() => {
      (sinon).restore();
    });
    it('Retornar um array de objetos contendo todos os timesHome e enviar status 200', async () => {
      const { status, body } = await chai.request(app).get('/leaderboard');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(resultTeamAwayAndHome);
    });
  });

  describe('Com Erro', () => { 
    beforeEach(() => {
      sinon.stub(leadBoardService, 'getClassification').throws();
    });
  
    afterEach(() => {
      (leadBoardService.getClassification as sinon.SinonStub).restore();
  
    });
    it('Retornar um objetos contendo um erro e status 500', async () => {
      const { status, body } = await chai.request(app).get('/leaderboard');
      const message = {
        message: "Erro interno"
      }
      expect(status).to.be.equal(500);
      expect(body).to.be.deep.equal({ message, error: {} });
    });
  });
});