const request = require('request');

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
});