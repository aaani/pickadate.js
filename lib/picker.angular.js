(function() {
	angular.module('pickadate', []);
	angular.module('pickadate').directive('pickDate', function() {
		
	    return {
			scope: {
				options: '=options',
				objectname: '=pickdateobject'
			},
			link: function(scope, element, attr) {
				var options = scope.options;
				
				var $input = $(element).pickadate(options);
				scope.$parent[scope.objectname] = $input;
			}
		};
	});
})();
