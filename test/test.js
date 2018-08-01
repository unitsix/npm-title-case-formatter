'use strict';

var expect = require('chai').expect;
var titleFormatter = require('../index');

describe('#titleFormatter', function() {
    it('should convert string to title', function() {
        var result = titleFormatter('test');
        expect(result).to.equal('Test');
    });
    it('should convert string with more words to title', function() {
        var result = titleFormatter('test with more words, some lowercase and some UPPER');
        expect(result).to.equal('Test with More Words, Some Lowercase and Some Upper');
    });
    it('should convert string with FAQs to title', function() {
        var result = titleFormatter('test FAQ and FAQs');
        expect(result).to.equal('Test FAQ and FAQs');
    });
});