'use strict';

let loadData = require('../js/Actions').loadData;
let _ = require('lodash');
let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe('Task table', () => {
    function isNotNumber(num) {
        return isNaN(num) || num === null || num === undefined;
    }

    describe('Load data', () => {
        it('should reject when load from undefined path', () => {            
            loadData('unknown url')
            .then(
                (data) => { console.log(data) },
                (err) => { assert.ok(err) }
            )
        })
    });
});
