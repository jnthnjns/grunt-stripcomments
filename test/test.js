'use strict';

/*
 * self-envoking function
 */
(function (window, undefined) {
	// ...Some code goes here

	/**
	 * @return {[type]}
	 */
	function FooBar () {
		// define name
		this.name = "foobar";
	}

	// create a global reference
	window.foobar = function () {
		return new FooBar();
	};

})(window, undefined);