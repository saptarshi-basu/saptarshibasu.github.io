module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: [ {
                  src: "*.jade",
				  dest: "./",
                  ext: ".html",
                  cwd: "src/jade/",
				  expand: true
                } ,
				{
                  src: "*.jade",
                  dest: "articles/",
                  ext: ".html",
                  cwd: "src/jade/articles/",
				  expand: true
                } ]
      }
    },
	less: {
      compile: {
        options: {
          paths: ['test/fixtures/include']
        },
        files: {
          'css/techsnippet.css': 'src/less/techsnippet.less',
		  'css/explore.css': 'src/less/explore.less',
		  'css/article.css': 'src/less/article.less'
        }
      }
	},
	copy: {
		dev: {
			files: [{
				cwd: 'src/img/',
				src: '*.*',
				dest: 'img/',
				expand: true
			},
			{
				cwd: 'src/font/',
				src: '*.*',
				dest: 'font/',
				expand: true
			},
			{
				cwd: 'src/css/',
				src: '*min.*',
				dest: 'css/',
				expand: true
			}

			]
		}
	},
	postcss: {
		options: {
			map: {
				inline: false,
				annotation: 'css/maps/' 
			},

        processors: [
			require('autoprefixer')({browsers: ['last 3 versions']}), 
			require('cssnano')() 
        ]
      },
      dist: {
		src: 'css/*.css',
      }
    },
	babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: [{
                expand: true,
				cwd: 'src/js/',
				ext: '.js',
				src: ['utility.js','main.js'],
				dest: 'js/'
            }]
        }
    },

 browserify: {
         dist: {
            files: {
               "js/techsnippet.js": ["js/main.js","js/utility.js"]
            }
         }
      }});
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  
  // Default task.
  grunt.registerTask('build', 'Convert Jade templates into html templates', ['jade','less','copy','postcss','babel','browserify']);
};
