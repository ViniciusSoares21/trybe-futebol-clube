import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { responseLoginVaid, mockToken } from './mocks/users';
import * as jsonwebtoken from 'jsonwebtoken';
import User from '../database/models/Users';

import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Teste endpoint /login/validate, com sucesso', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Retornar um objeto contendo a role do user e enviar status 200', async () => {
    sinon.stub(jsonwebtoken, 'verify').callsFake(() => { data: {email: 'admin@admin.com'}});
    sinon.stub(User, 'findOne').resolves(responseLoginVaid as unknown as User );

    const { status, body } = await chai.request(app).get('/login/validate')
    .set("authorization", mockToken.token);

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(responseLoginVaid);
  });
});