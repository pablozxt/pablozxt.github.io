module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.initConfig({
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
			        'js/libraries.min.js': ['js/libraries.js'],
			      }//files
			 }//my_target
		},//uglify
		watch : {
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
					'_compass/*.scss',
					'_compass/**/*.scss',
					'js/*.js',
					'js/**/*.js'
					],//site files
				tasks : ['shell:jekyllBuild'],
				options : {livereload: true}
			}//site
		}//watch
	})//initConfig
	
	grunt.registerTask('serve', ['concat','uglify','shell:jekyllBuild','shell:jekyllServe']);
	grunt.registerTask('default', ['watch','shell:jekyllBuild']);
}//exports	