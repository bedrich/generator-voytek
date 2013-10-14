'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var FkGenerator = module.exports = function FkGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies();
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(FkGenerator, yeoman.generators.Base);

FkGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        name: 'appName',
        message: 'What do you want to call your app?',
        default: 'chompytown'
    }];

    this.prompt(prompts, function (props) {
        this.appName = props.appName;

        cb();
    }.bind(this));
};

FkGenerator.prototype.app = function app() {
    this.mkdir('scss');
    this.mkdir('css');
    this.mkdir('js');
    this.mkdir('img');

    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('index.html', 'index.html');
    this.template('scss/main.scss', 'scss/main.scss');
    this.template('scss/_modules.scss', 'scss/_modules.scss');
    this.template('scss/_theme.scss', 'scss/_theme.scss');
    this.template('scss/_base.scss', 'scss/_base.scss');
    this.template('js/main.js', 'js/main.js');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
};

FkGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
};
