'use strict';

/*
 * self-envoking function
 */
(function (window, undefined) {

	/**
	 * @return {[type]}
	 */
	function FooBar () {
		this.name = "foobar";
	}
	window.foobar = function () {
		return new FooBar();
	};

})(window, undefined);