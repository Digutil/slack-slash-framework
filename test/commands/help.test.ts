import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('help command', () => {

    let postObj = {
        token: 'gIkuvaNzQIHg97ATvDxqgjtO',
        team_id: 'T0001',
        team_domain: 'example',
        channel_id: 'C2147483705',
        channel_name: 'test',
        user_id: 'U2147483697',
        user_name: 'Steve',
        command: '/weather',
        text: 'help',
        response_url: 'https://hooks.slack.com/commands/1234/5678'
    };

    it('should only be visible to you', () => {
        return chai.request(app).post('/')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(postObj)
            .then(res => {
                expect(res.body.response_type).to.eql('ephemeral');
            });
    });

    it('should have help text', () => {
        return chai.request(app).post('/')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(postObj)
            .then(res => {
                expect(res.body.text).to.eql('```There are no help commands, yet!\n```');
            });
    });

});