import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import * as TeamsService from '../database/services/teams.service';
import { expectedResult  } from './mocks/teams';
import Teams from '../database/models/Teams';
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Teste endpoint /teams', () => {
  describe('Com Sucesso', () => {
    beforeEach(() => {
      sinon.stub(Teams, 'findAll').resolves(expectedResult as unknown as Teams[] );
    });
  
    afterEach(() => {
      (TeamsService.getTeams as sinon.SinonStub).restore();
    });
    it('Retornar um array de objetos contendo todos os times e enviar status 200', async () => {
      const { status, body } = await chai.request(app).get('/teams');
  
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(expectedResult);
    });
  });

  describe('Com Erro', () => { 
    beforeEach(() => {
      sinon.stub(TeamsService, 'getTeams').throws();
    });
  
    afterEach(() => {
      (TeamsService.getTeams as sinon.SinonStub).restore();
  
    });
    it('Retornar um array de objetos contendo todos os times e enviar status 200', async () => {
      const { status, body } = await chai.request(app).get('/teams');
  
      expect(status).to.be.equal(500);
      expect(body).to.be.deep.equal({ message: 'Erro interno', error: {} });
    });
  });
});
