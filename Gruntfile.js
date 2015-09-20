module.exports = function(grunt) {

  var srcFiles = ["lab2.js"];
  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        sub: true,
        node: true,
        quotmark: "single",
        globals: {
          console: true
        }
      }
    },
    jscs: {
      src: srcFiles,
      options: {
        config: '.jscsrc'
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");

  grunt.registerTask("default", [ "jshint", "jscs"]);

};
