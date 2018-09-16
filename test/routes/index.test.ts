import * as chai from 'chai';
import chaiExpressRouter from 'chai-express-router';
import routes from '../../routes';

chai.use(chaiExpressRouter);

describe('routes', () => {
  it('exists', () => {
    routes.should.not.be.undefined;
  });

  it('has a get \'/\' route', () => {
    routes.should.have.route("/", "get");
  });
});