'use strict';

module.exports = function (grunt) {

    var LIVERELOAD_PORT = 35729;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [
                'Gruntfile.js',
                'js/*.js'
            ],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    open: true,
                    livereload: LIVERELOAD_PORT
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    environment: 'production'
                }
            }
        },
        watch: {
            options: {
                livereload: LIVERELOAD_PORT
            },
            css: {
                files: ['scss/*.scss'],
                tasks: ['compass'],
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('server', ['connect:server', 'watch']);
};
