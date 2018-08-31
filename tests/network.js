const {describe, it} = require('mocha');
const {assert} = require('chai');
const debug = require('debug')('network:');

import Network from '../interfaces/network';
const network = new Network();

describe('Network tests', () => {
    it('should NOT create node', () => {
        try {
            network.createNode('');
            this.fail('Unxpected success');
        } catch (err) {
            assert.isOk(err.constructor === Error, 'Unxpected type');
            debug(err);
        }
    });

    it('should create node', function() {
        network.createNode('node1');
        assert.isObject(network._nodes, 'Got not Object');
    });

});
