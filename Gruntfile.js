module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: {
          'index.html': 'src/jade/index.jade'
        }
      }
    },
	less: {
      compile: {
        options: {
          paths: ['test/fixtures/include']
        },
        files: {
          'css/techsnippet.css': 'src/less/techsnippet.less',
        }
      }
	},
	copy: {
		dev: {
			files: [{
				cwd: 'node_modules/bootstrap/dist/css/',
				src: 'bootstrap-theme.css',
				dest: 'css/',
				expand: true
			},
			{
				cwd: 'node_modules/bootstrap/dist/css/',
				src: 'bootstrap.css',
				dest: 'css/',
				expand: true
			},
			{
				cwd: 'src/img/',
				src: 'Fotolia_107889582_Subscription_Monthly_M.jpg',
				dest: 'img/',
				expand: true
			}]
		}
	},
	postcss: {
		options: {
			map: {
				inline: false, // save all sourcemaps as separate files...
				annotation: 'css/maps/' // ...to the specified directory
			},

        processors: [
			require('autoprefixer')({browsers: ['last 3 versions']}), // add vendor prefixes
			//require('cssnano')() // minify the result
        ]
      },
      dist: {
		src: 'css/*.css',
      }
    }
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-postcss');
  // Default task.
  grunt.registerTask('build', 'Convert Jade templates into html templates', ['jade','less','copy','postcss']);
};
