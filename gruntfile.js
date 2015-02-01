module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-smushit');
	
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
				dest : 'js/libraries.js'
			},//libraries
			app : {
				src : [
					'js/app/menu.js',
					'js/app/read-more.js'
				],//app src
				dest : 'js/app.js'
			}//app
		},//concat
		uglify : {
			my_target : {
			      files: {
			        'js/libraries.min.js': ['js/libraries.js'],
					'js/app.min.js': ['js/app.js']
			      }//files
			 }//my_target
		},//uglify
		smushit: {
		    mygroup: {
		      src: ['images_source/*.png','images_source/*.jpg'],
		      dest: 'images'
		    }
		},//smushit
		watch : {
			js: {
		        files: ['js/**/*.js', 'js/*.js'],
		        tasks: ['concat','uglify'],
		        options: {livereload: true}
			},//js
			site : {
				files:[
					'*.html',
					'**/*.html',
					'**/**/*.html',
					//'index.html',
					//'_includes/*.html',
					//'_layouts/*.html',
					//'_posts/*.html',
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
	
	grunt.registerTask('serve', ['concat','uglify','smushit','shell:jekyllBuild','shell:jekyllServe']);
	grunt.registerTask('default', ['watch','shell:jekyllBuild']);
}//exports	