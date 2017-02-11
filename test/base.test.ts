import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;

describe('base', () => {

    it('should be json', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });

    it('should respond with slack specific properties', () => {
        return chai.request(app).get('/')
            .then(res => {
                assert.property(res.body, 'response_type');
                assert.property(res.body, 'text');
                assert.property(res.body, 'attachments');
            });
    });

});