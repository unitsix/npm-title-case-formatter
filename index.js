'use strict';
/**
 * Use to convert passed string to proper title case
 * @param {string} str
 * @return {string}
 */
module.exports = function(str) {
    //Splitting and joining on
	var str = str.split('_').join(' ');
	var str = str.split('/').join(' / ');
	//Words that should not get caps
	var noCaps = ['of', 'a', 'the', 'and', 'an', 'am', 'or', 'nor', 'but', 'is', 'if', 'then',
		'else', 'when', 'at', 'from', 'by', 'on', 'off', 'for', 'in', 'out', 'to', 'into', 'with'
	];
	//Words or strings to ignore
	var noChange = ['FAQ', 'FAQs'];
	//Convert and return the string
	return str.replace(/\w\S*/g, function(txt, offset) {
		if (offset !== 0 && noCaps.indexOf(txt.toLowerCase()) != -1) {
			return txt.toLowerCase();
		}
		if (noChange.indexOf(txt) != -1) {
			return txt;
		}
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};