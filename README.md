browserify-i18n
===============

Transformer for browserify to compile language specific bundles

# To see it in action
If you do not have browserify installed, install it first:

`npm install browserify`

Then, in the root folder:

`browserify -t [ ./i18n.js --lang=en ] demo/index.js > bundle.js`

This bundles the demo files with the language specified, in this case `en` into a file named `bundle.js`
This bundle can be executed with node:
`node bundle.js`

# Translation file format
as discussed in [https://github.com/Magnetme/web-components/issues/2](https://github.com/Magnetme/web-components/issues/2).

## File format
The translation file should be in a valid [json](http://www.json.org/) format. You can have as many translation files as you like.

## File name
The name of the file should always end with the following characters: `.i18n.json`. For example, a valid name for a file could be: `myTranslations.i18n.json`

## File contents
A single translation file should consist 1 root object where the properties are the keys for the translations. The value for each key is an object with the language as the key along with the translation for the value for that language. For example:

```json
{
    "landingPage_welcome": {
        "en": "Welcome",
        "nl": "Welkom"
    },
    "landingPage_bye": {
        "en": "Goodbye",
        "nl": "Tot ziens"
    }
}
```

### Missing translations
When translating a translation file in a certain language, you should always provide a translation for every key. The following translation file will throw an **error** for a missing translation when translating to `sp`:

```json
{
    "landingPage_welcome": {
        "en": "Welcome",
        "nl": "Welkom",
        "sp": "Ola"
    },
    "landingPage_bye": {
        "en": "Goodbye",
        "nl": "Tot ziens"
    }
}
```
When translating to `sp` with:

`browserify -t [ ./i18n.js --lang=sp ] demo/index.js > bundle.js`

The following error occurs:

`Missing translation (sp) for landingPage_bye`