'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-famous-ionic:app', function() {
    before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({
                'skip-install': true,
                'check-travis': false,
                'check-git': true

            })
            .withPrompt({
                someOption: true
            })
            .on('end', done);
    });

    it('creates files', function() {
        assert.file([
            'bower.json',
            'package.json',
            '.editorconfig',
            '.jshintrc'
        ]);
    });
});