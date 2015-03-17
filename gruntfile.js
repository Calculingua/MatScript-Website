'use strict';
exports = module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: {
                src: ['server/**/*.js', 'public/**/*.js', '!public/lib/**', '!public/build/**', 'gruntfile.js', 'index.js'],
                options: {
                    jshintrc: 'jshintrc.json'
                }
            }
        },

        watch: {
            js: {
                files: ['server/**/*.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['public/sass/**/*.scss'],
                tasks: ['sass'],
            },
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            dev: {
                tasks: ['nodemon:dev', 'watch']
            }
        },

        nodemon: {
            dev: {
                script: 'start.js',
                options: {
                    args: [],
                    ignore: ['public/**'],
                    ext: 'js,html',
                    nodeArgs: ['--debug'],
                    delay: 1000,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },



        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'public/sass',
                    src: ['**/*.scss'],
                    dest: 'public/build/css',
                    ext: '.css'
                }]

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['jshint', 'sass', 'concurrent']);
};