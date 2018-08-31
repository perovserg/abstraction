const {describe, it} = require('mocha');
const {assert} = require('chai');
const debug = require('debug')('network:');

import Network from '../interfaces/network';
const network = new Network();

describe('Network tests', () => {
    it('should NOT create node', () => {
        try {
            network.createNode('');
            assert.isOk(false, 'Unexpected success');
        } catch (err) {
            debug(err);
        }
    });

    it('should create node', function() {
        network.createNode('node1');
        assert.isOk(network._nodes);
    });

});
