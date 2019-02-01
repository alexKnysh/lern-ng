'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['build'],

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**', '!*.ts', '!js/**', '!lib/**', '!**/*.css'],
            dest: 'build/'
          },
          {
            expand: true,
            cwd: 'node_modules/angular/',

            src: ['angular.min.js'],
            dest: 'build/lib/angular'
          }
        ]
      }
      /*shims: {
        expand: true,
        cwd: 'app/lib/webshim/shims',
        src: ['**'],
        dest: 'dist/js/shims'
      }*/
    },
    tslint: {
      options: {
        configuration: 'tslint.json',
        force: false,
        fix: true
      },
      file: {
        src: ['src/**/*.ts', 'src/*.ts']
      }
    },
    ts: {
      default: {
        tsconfig: './tsconfig.json'
      }
    },
    targethtml: {
      dist: {
        files: {
          'build/index.html': 'src/index.html'
        }
      }
    },
    browserify: {
      js: {
        // A single entry point for our app
        src: 'src/index.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'build/index.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-browserify');

  //'tslint', 'ts'
  grunt.registerTask('default', [
    'clean',
    'ts',
    'browserify',
    'copy',
    // 'tslint',
    'targethtml'
  ]);
};
