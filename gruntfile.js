module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-smushit');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.initConfig({
		shell : {
			jekyllBuild : {
		    	command : 'jekyll build'
		   	},//jekyllBuild
		    jekyllServe : {
		    	command : 'jekyll serve'
		    }//jekyllServe
		},//shell
		babel : {
			dist: {
				files: {
					"js/app/read-more.js": "js/app/read-more.es6.js"
				}//files
			}//dist
		},//babel
		concat : {
			options : {
				separator: ';'
			},//concat options
			libraries : {
				src : [
					'js/vendors/jquery.js'
				],//libraries src
				dest : 'js/libraries.js'
			},//libraries
			app : {
				src : [
					'js/app/read-more.js'
				],//app src
				dest : 'js/app.js'
			},//app
			headLibraries : {
				src : [
					'js/vendors/modernizr.js',
					'js/vendors/picturefill.js'
				],//headLibraries src
				dest : 'js/headLibraries.js'
			}//headLibraries
		},//concat
		uglify : {
			my_target : {
			      files: {
			        'js/libraries.min.js': ['js/libraries.js'],
					'js/app.min.js': ['js/app.js'],
					'js/headLibraries.min.js': ['js/headLibraries.js']
			      }//files
			 }//my_target
		},//uglify
		cssmin: {
			target: {
			    files: {
			      	'_site/css/app.min.css': ['_site/css/app.css']
			    }//files
			}//target
		},//cssmin
		watch : {
			js: {
		        files: ['js/**/*.js', 'js/*.js'],
		        tasks: ['babel','concat','uglify'],
		        options: {livereload: true}
			},//js
			site : {
				files:[
					'*.html',
					'**/*.html',
					'**/**/*.html',
					'_config.yml',
					'_compass/*.scss',
					'_compass/**/*.scss',
					'js/*.js',
					'js/**/*.js',
					'js/**/*.es6'
					],//site files
				tasks: ['shell:jekyllBuild'],
				options: {livereload: true}
			},//site
			css: {
				files: ['_site/css/app.css'],
				tasks: ['cssmin'],
				options: {livereload: true}
			} 
		}//watch
	})//initConfig
	
	grunt.registerTask('serve', ['babel','concat','uglify','shell:jekyllBuild', 'cssmin', 'shell:jekyllServe']);
	grunt.registerTask('default', ['watch']);
}//exports	