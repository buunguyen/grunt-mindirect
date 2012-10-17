module.exports = function(grunt) {
  grunt.registerMultiTask('mindirect', 'Minify files in-place using UglifyJS.', function() {
    var files = grunt.file.expandFiles(this.data);
	files.forEach(function(file) {
	    var max = grunt.file.read(file);
	    var min = grunt.helper('uglify', max, grunt.config('uglify'));
	    grunt.file.write(file, min);
	    if (this.errorCount) return false;
	    grunt.log.writeln('File "' + file + '" was minified.');
	    grunt.helper('min_max_info', min, max);
	});
  });
};