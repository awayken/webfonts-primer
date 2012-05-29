/*jslint devel: false, browser: false, white: true */
/*global $: false, window: false */

/* Author: Miles Rausch (http://awayken.com)

*/

(function () {
	"use strict";

	window.PRIMER = {
		init: function () {
			$.deck('.slide');
		}
	};

	$(window.document).ready(function () {
		window.PRIMER.init();
	});
}());
