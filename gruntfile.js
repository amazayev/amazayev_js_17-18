module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['js/src/*.js'],
          dest: 'js/script.main.js'
        }
      },
      uglify: {
         dist: {
         files: {
         'js/script.main.min.js': ['js/script.main.js']
    }
  }
},
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
