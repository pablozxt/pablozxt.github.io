module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-shell');
	grunt.initConfig({
		compass:{
			dev:{
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
		watch: {
			options: {livereload: true},
			html:{
				files:[
					'index.html',
					'_includes/*.html',
					'_layouts/*.html',
					'_posts/*.html'
					]//html files
			},//html
			sass: {
				files: ['scss/*.scss'],
				tasks: ['compass:dev']
			}//sass
		}//watch
	})//initConfig
	grunt.registerTask('serve', ['shell:jekyllServe']);
	grunt.registerTask('default', ['watch','shell:jekyllBuild']);
}//exports	