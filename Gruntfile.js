module.exports = function(grunt) {
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
				  paths: ['src/less']
				},
				files: {
				  'src/css/main.css': 'src/less/main.less'
				}
			}
		},
		copy: {
			dev: {
				files: [
					{
						cwd: 'src/img/',
						src: '*.*',
						dest: 'img/',
						expand: true
					},
					{
						cwd: 'src/fonts/',
						src: '**/*.*',
						dest: 'fonts/',
						expand: true
					},
					{
						cwd: 'src/jade/demo',
						src: '*.*',
						dest: 'demo/',
						expand: true
					}					
				]
			}
		},
		concat: {
			options: {
			},
			dist: {
				src: ['src/css/main.css','src/css/materialize.min.css'],
				dest: 'src/css/techsnippet.css'
			},
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
			single_file: {
				src: 'src/css/techsnippet.css',
				dest: 'css/techsnippet.min.css'
			}
		},
		uglify: {
			js: {
				files: {
					'js/techsnippet.min.js': [
						'src/js/jquery-3.1.0.min.js',
						'src/js/materialize.min.js']
				},
				options: {
					preserveComments: false
				}
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	  
	grunt.registerTask('build', 'Convert Jade templates into html templates', ['jade','less','copy','concat','postcss','uglify']);
};
