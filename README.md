browserify-i18n
===============

Transformer for browserify to compile language specific bundles

##To see it in action
If you do not have browserify installed, install it first:

`npm install browserify`

Then, in the root folder:

`browserify -t [ ./i18n.js --lang=en ] demo/index.js > bundle.js`

This bundles the demo files with the language specified, in this case `en` into a file named `bundle.js`
This bundle can be executed with node:
`node bundle.js`
