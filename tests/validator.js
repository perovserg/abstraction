const {describe, it} = require('mocha');
const {assert} = require('chai');
const debug = require('debug')('network:');

import Validator from '../lib/validator';

describe('Validator tests', () => {
    it('should NOT validate data', () => {
        let isValid;
        try {
            isValid = Validator.validate('');
        } catch (err) {
            debug(err);
        }
        assert.isNotTrue(isValid, 'Got valid data');

    });

    it('should validate data', function() {
        let isValid;
        try {
            isValid = Validator.validate('some data');
        } catch (err) {
            debug(err);
        }
        assert.isTrue(isValid, 'Got not valid data');
    });

});
