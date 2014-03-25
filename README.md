front-end-framework
===================

A front-end framework for making Websites. Includes a Gulp setup for working with LESS and JavaScript files.

Code in the dev folder is preprocessed. Code the live folder is processed via Gulp.

## What's in Here:

* HTML
	* [HTML5 Boilerplate](http://html5doctor.com/html-5-boilerplates/) HTML Example - By [Remy Sharp](https://twitter.com/rem)

* CSS
	* [LESS-Fluid-Grid](https://github.com/KruegerDesigns/LESS-Fluid-Grid) - By [Adam Krueger](https://twitter.com/KruegerDesigns)
	* [HTML5 Reset](http://html5doctor.com/html-5-reset-stylesheet/) - By [Richard Clark](https://twitter.com/Rich_Clark)

* JavaScript
	* jQuery
	* Initial scripts file, ***init.js***
	* [ScrollMagic](http://janpaepke.github.io/ScrollMagic) and the [greensock](http://www.greensock.com/licensing/) library

* Node
	* [path](https://www.npmjs.org/search?q=path) - Node.JS path module (used with gulp-less plugin)

* Gulp Plugins
	* [gulp-less](https://www.npmjs.org/search?q=gulp-less) - LESS Processing
	* [gulp-jshint](https://www.npmjs.org/search?q=gulp-jshint) - JSHint, a JavaScript Code Quality Tool
	* [gulp-concat](https://www.npmjs.org/search?q=gulp-concat) - Concatenates files
	* [gulp-uglify](https://www.npmjs.org/search?q=gulp-uglify) - Minify files with UglifyJS
	* [gulp-rename](https://www.npmjs.org/search?q=gulp-rename) - Rename files
	* [gulp-file-include](https://www.npmjs.org/package/gulp-file-include) - Include partial files
	* [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin) - Minify PNG, JPEG and GIF images

* Images
	* Images are placed in ***dev/img/***, then minified and moved to ***live/img/*** - Thanks to: [Badhon Ebrahim](http://dribbble.com/shots/586626-Dribbble-Background-By-Badhon-Ebrahim)