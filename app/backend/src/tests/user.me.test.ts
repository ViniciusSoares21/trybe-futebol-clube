import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import * as UserService from '../database/services/user.service';
import { responseLoginVaid, mockToken } from './mocks/users';
import User from '../database/models/Users';

import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Teste endpoint /login/validate, com sucesso', () => {
  beforeEach(() => {
    sinon.stub(UserService, 'getByUserEmail').resolves(responseLoginVaid as unknown as User );
  });

  afterEach(() => {
    (UserService.getByUserEmail as sinon.SinonStub).restore();
  });

  it('Retornar um objeto contendo a role do user e enviar status 200', async () => {
    const { status, body } = await chai.request(app)/* .set("Authorization", mockToken) */.get('/login/validate');

    expect(status).to.be.equal(200);
    //expect(body).to.be.an('object');
    expect(body).to.be.deep.equal(responseLoginVaid);
  });
});