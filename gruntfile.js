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
					'js/vendors/jquery.js'
					],//libraries src
				dest : 'js/libraries.js',
			}//libraries
		},//concat
		uglify : {
			my_target : {
			      files: {
			        'js/libraries.min.js': ['js/vendors/libraries.js'],
			      }//files
			 }//my_target
		},//uglify
		watch : {
/*			sass : {
				files: ['scss/*.scss'],
				tasks: ['compass:dev'],
				options: {livereload: true}
			},*///sass
			js: {
		        files: ['js/**/*.js', 'js/*.js'],
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
					'css/*.scss',
					'css/**/*.scss',
					'_sass/*.scss',
					'js/*.js',
					'js/**/*.js'
					],//site files
				tasks : ['shell:jekyllBuild'],
				options : {livereload: true}
			}//site
		}//watch
	})//initConfig	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('serve', ['compass','concat','uglify','shell:jekyllBuild','shell:jekyllServe']);
	grunt.registerTask('default', ['watch','shell:jekyllBuild']);
}//exports	