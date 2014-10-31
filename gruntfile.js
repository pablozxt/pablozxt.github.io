module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.initConfig({
		compass : {
			dev : {
				options:{
					config: 'config.rb'
				}//compass options
			}//compass dev
		},//compass
		shell : {
			jekyllBuild : {
		    	command : 'jekyll build'
		   	},//jekyllBuild
		    jekyllServe : {
		    	command : 'jekyll serve'
		    }//jekyllServe
		},//shell
		concat : {
			options : {
				separator: ';'
			},//concat options
			libraries : {
				src : [
					'bower_components/foundation/js/vendor/jquery.js'
					],//libraries src
				dest : 'js/libs.js',
			},//libraries
			foundation : {
				src : [
					'bower_components/foundation/js/foundation/foundation.offcanvas.js'
					],
				dest : 'js/foundation.js',
			}//foundation
		},//concat
		uglify : {
			my_target : {
			      files: {
			        'js/libs.min.js': ['js/libs.js'],
					'js/foundation.min.js': ['js/foundation.js']
			      }//files
			 }//my_target
		},//uglify
		watch : {
			sass : {
				files: ['scss/*.scss'],
				tasks: ['compass:dev'],
				options: {livereload: true}
			},//sass
			js: {
		        files: ['js/**/*.js', 'bower_components/foundation/js/**/*.js'],
		        tasks: ['concat','uglify'],
		        options: {livereload: true}
			},//js
			site : {
				files:[
					'index.html',
					'_includes/*.html',
					'_layouts/*.html',
					'_posts/*.html',
					'_config.yml',
					'scss/*.scss',
					'js/*.js'
					],//site files
				tasks : ['shell:jekyllBuild'],
				options : {livereload: true}
			}//site
		}//watch
	})//initConfig	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('serve', ['concat','uglify', 'shell:jekyllServe']);
	grunt.registerTask('default', ['watch','shell:jekyllBuild']);
}//exports	