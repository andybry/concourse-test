const request = require('request');
const noop = require('lodash/noop');

describe('suite', () => {
    it('should pass', done => {
        request({
            url: 'https://api.github.com/rate_limit',
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }, (err, res) => {
            expect(res.body.resources.core.limit).toBe(60);
            done();
        })
    });

    it('should also pass', () => {
        noop();
    });

    it('should fail', () => {
        expect(true).toBe(false);
    });
});