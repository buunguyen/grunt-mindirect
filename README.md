# grunt-mindirect
[Grunt](https://github.com/cowboy/grunt) [multi-task](https://github.com/cowboy/grunt/blob/master/docs/types_of_tasks.md) for minifying JS files and overwriting them with minified contents (as opposed to the built-in [min](https://github.com/gruntjs/grunt/blob/master/docs/task_min.md) task which creates one single output with concatenated minified contents).

This task is typically used together with [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy/) task.

## Getting Started
Install the module with: `npm install grunt-mindirect`
Then load it from your `grunt.js` file:
```js
grunt.loadNpmTasks('grunt-mindirect');
```

In your `grunt.js` file, add something like below:

```js
mindirect: {
	all: ["lib/\*.js", "scripts/\*.js"]
}
```

After the task is run, all matched files will have their contents minified.

## License
Copyright (c) 2012 Buu Nguyen
Licensed under the MIT license.