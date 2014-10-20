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
			site: {
				files:[
					'index.html',
					'_includes/*.html',
					'_layouts/*.html',
					'_posts/*.html'
					],//site files
				tasks: ['shell:jekyllBuild'],
				options: {livereload: true}
			},//site
			sass: {
				files: ['scss/*.scss'],
				tasks: ['compass:dev'],
				options: {livereload: true}
			}//sass
		}//watch
	})//initConfig
	grunt.registerTask('serve', ['shell:jekyllServe']);
	grunt.registerTask('default', ['shell:jekyllBuild','watch']);
}//exports	