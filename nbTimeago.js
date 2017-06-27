(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['nbTimeago'], factory);
    } else {
        // Browser globals
        root.nbTimeago = factory(root.options);
    }
}(window, function(options) {

    var nbTimeago = {

		getTimeAgo : function(options){
			
		}
    }

    return nbTimeago;

}));
