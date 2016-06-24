'use strict';
(function (window, undefined) {
	// ...Some code goes here
	function FooBar () {
		// define name
		this.name = "foobar";
	}

	// create a global reference
	window.foobar = function () {
		return new FooBar();
	};

})(window, undefined);