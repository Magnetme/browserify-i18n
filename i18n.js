var through = require('through2');
var _ = require("lodash");

module.exports = function(file, options) {
	if (file.match(/\.i18n\.json$/)) {
		if (!options.lang) {
			throw "Cannot translate without a language";
		}
		return through(function(buf, enc, next) {
			var bundle = JSON.parse(buf.toString('utf8'));
			var translated = {};
			_.each(bundle, function(translations, key) {
				if (!translations[options.lang]) {
					throw "Missing translation (" + options.lang + ") for " + key;
				}
				translated[key] = translations[options.lang];
			});
			this.push(JSON.stringify(translated));

			next();
		});

	} else {
		return through();
	}
};
