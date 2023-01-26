import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import * as MatchersService from '../database/services/matches.service';
import { allMatches, allMatchesInProgressTrue, allMatchesInProgressFalse, 
  resultCreateMatches  } from './mocks/matches';
import Matches from '../database/models/Matchers';
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

  describe('Teste endpoint GET /matches', () => {
    describe('Com Sucesso', () => {
      beforeEach(() => {
        sinon.stub(Matches, 'findAll').resolves(allMatches as unknown as Matches[] );
      });
    
      afterEach(() => {
        (sinon).restore();
      });
      it('Retornar um array de objetos contendo todos os matches e enviar status 200', async () => {
        const { status, body } = await chai.request(app).get('/matches');
    
        expect(status).to.be.equal(200);
        expect(body).to.be.deep.equal(allMatches);
      });
    });
  
    describe('Com Erro', () => { 
      beforeEach(() => {
        sinon.stub(MatchersService, 'getListMatches').throws();
      });
    
      afterEach(() => {
        (MatchersService.getListMatches as sinon.SinonStub).restore();
    
      });
      it('Retornar um objetos contendo uma menssage de erro e enviar status 500', async () => {
        const { status, body } = await chai.request(app).get('/matches');
        const message = {
          message: "Erro interno"
        }
        expect(status).to.be.equal(500);
        expect(body).to.be.deep.equal({ message, error: {} });
      });
    });
  });
  
  describe('Teste endpoint /matches?inProgress=true', () => {
    describe('com sucesso', () => {  
      afterEach(() => {
        (sinon).restore();
      });
      it('Retornar um array de objetos contendo o matches com partidas em andamento e enviar status 200', async () => {
        beforeEach(() => {
          sinon.restore()
          sinon.stub(Matches, 'findAll').resolves(allMatchesInProgressTrue as unknown as Matches[] );
        });
  
        const { status, body } = await chai.request(app).get('/matches?inProgress=true')
    
        expect(status).to.be.equal(200);
        expect(body).to.be.deep.equal(allMatchesInProgressTrue);
      });
      it('Retornar um array de objetos contendo o matches com partidas encerradas e enviar status 200', async () => {
        beforeEach(() => {
          sinon.restore()
          sinon.stub(Matches, 'findAll').resolves(allMatchesInProgressFalse as unknown as Matches[] );
        });
        
        const { status, body } = await chai.request(app).get('/matches?inProgress=false');
    
        expect(status).to.be.equal(200);
        expect(body).to.be.deep.equal(allMatchesInProgressFalse);
      });
    });
  });
  
  describe('Teste endpoint PATCH /matches/:id/finish para alterar p inProgress de uma partida para false', () => {
    describe('Com Sucesso', () => {
      beforeEach(() => {
        sinon.stub(Matches, 'update').resolves();
      });
    
      afterEach(() => {
        (sinon).restore();
      });
      it('Retornar uma menssagem "Finished" e enviar status 200', async () => {
        const { status, body } = await chai.request(app).patch('/matches/1/finish');
    
        expect(status).to.be.equal(200);
        expect(body).to.be.deep.equal({ message: "Finished" });
      });
    });
  
    describe('Com Erro', () => { 
      beforeEach(() => {
        sinon.stub(MatchersService, 'updateInProgress').throws();
      });
    
      afterEach(() => {
        (MatchersService.updateInProgress as sinon.SinonStub).restore();
    
      });
      it('Retornar um objetos contendo uma menssage de erro e enviar status 500', async () => {
        const { status, body } = await chai.request(app).patch('/matches/1/finish');
        const message = {
          message: "Erro interno"
        }
        expect(status).to.be.equal(500);
        expect(body).to.be.deep.equal({ message, error: {} });
      });
    });
  });
  
  describe('Teste endpoint PATCH /matches/:id para alterar goals de uma partida', () => {
    describe('Com Sucesso', () => {
      beforeEach(() => {
        sinon.stub(Matches, 'update').resolves();
      });
    
      afterEach(() => {
        (sinon).restore();
      });
      it('Retornar uma menssagem "Update Goals" e enviar status 200', async () => {
        const { status, body } = await chai.request(app).patch('/matches/1').send({
          "homeTeamGoals": 3,
          "awayTeamGoals": 1
        });
      
        expect(status).to.be.equal(200);
        expect(body).to.be.deep.equal({ message: 'Update Goals' });
      });
    });
  
    describe('Com Erro', () => { 
      beforeEach(() => {
        sinon.stub(MatchersService, 'updateInProgress').throws();
      });
    
      afterEach(() => {
        (MatchersService.updateInProgress as sinon.SinonStub).restore();
    
      });
      it('Retornar um objetos contendo uma menssage de erro e enviar status 500', async () => {
        const { status, body } = await chai.request(app).patch('/matches/1/finish');
        const message = {
          message: "Erro interno"
        }
        expect(status).to.be.equal(500);
        expect(body).to.be.deep.equal({ message, error: {} });
      });
    });
  });
  
  describe('Teste endpoint POST /matches para salver uma partida', () => {
    describe('Com Sucesso', () => {
      beforeEach(() => {
        sinon.stub(Matches, 'create').resolves(resultCreateMatches as unknown as Matches);
      });
    
      afterEach(() => {
        (sinon).restore();
      });
      it('Retornar uma menssagem "Update Goals" e enviar status 200', async () => {
        const mockToken = {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc'
        }
        const { status, body } = await chai.request(app).post('/matches').send(
          {
            "homeTeamId": 16,
            "awayTeamId": 8, 
            "homeTeamGoals": 2,
            "awayTeamGoals": 2,
          }).set("Authorization", mockToken.token);;
    
        expect(status).to.be.equal(201);
        expect(body).to.be.deep.equal(resultCreateMatches);
      });
    });
  
    describe('Com Erro', () => { 
      beforeEach(() => {
        sinon.stub(MatchersService, 'updateInProgress').throws();
      });
    
      afterEach(() => {
        (MatchersService.updateInProgress as sinon.SinonStub).restore();
    
      });
      it('Retornar um objetos contendo uma menssage de erro e enviar status 500', async () => {
        const { status, body } = await chai.request(app).patch('/matches/1/finish');
        const message = {
          message: "Erro interno"
        }
        expect(status).to.be.equal(500);
        expect(body).to.be.deep.equal({ message, error: {} });
      });
    });
  });

