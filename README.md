Title Formatter
=========

A small library that converts string to title case

## Installation

  `npm install @unitsix/title-formatter`

## Usage

    var titleFormatter = require('@unitsix/title-formatter');
    
    var formattedString = titleFormatter('title with lowercase and UPPER');
    
    Output should be `Title with Lowercase and Upper`


## Tests

  `npm test`

## Deploy

```
npm version patch -m "Version %s - add sweet badges"
```

**%s** = the new version number.

This command will bump the version number in **package.json**, add a new commit, and tag it with this release number.

**Note**: Your Git working directory has to be **clean** before you can run **npm version**.

After bumping the version number

```
git push && git push --tags (or git push origin master --tags)
npm publish
```