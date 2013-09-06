/*
 * - Gruntfile.js
 * - Appsbroker Consulting Limited
 */

'use strict';

var mountFolder = function ( connect, dir ) {
  return connect.static( require( 'path' ).resolve( dir ) );
};

module.exports = function ( grunt ) {

  pkg: grunt.file.readJSON('package.json'),
  require( 'matchdep' ).filterDev('grunt-*').forEach( grunt.loadNpmTasks );
  grunt.initConfig({
    tag: {
      banner: "<script>\r\n"
    },
    concat : {
      dist: {
        src: [
          'js/scripts.js'
        ],
        dest: 'scripts.html'
      },
      options: {
        //banner: "<%= tag.banner %>"
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '/styles.html': 'css/global.scss'
        }
      }
    },
    watch: {
      dist: {
        files: '*.js',
        // tasks: ['uglify:files']
        tasks: ['concat:dist']
      },
      sass: {
        files: 'css/{,*/}*.{scss,sass}',
        tasks: ['sass']
      }
    }
  });

  // Default
  grunt.registerTask( 'default' , [
    'sass',
    // 'uglify',
    'concat',
    'watch'
  ]);

};