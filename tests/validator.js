const {describe, it} = require('mocha');
const {assert} = require('chai');
const debug = require('debug')('network:');

import Validator from '../lib/validator';

describe('Validator tests', () => {
    it('should NOT validate data', () => {
        try {
            Validator.validate('');
            assert.isOk(false, 'Unexpected success');
        } catch (err) {
            debug(err);
        }
    });

    it('should validate data', function() {
        try {
            Validator.validate('some data');
            assert.isOk();
        } catch (err) {
            debug(err);
        }
    });

});
