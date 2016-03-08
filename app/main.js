var myApp=angular.module('myApp', []);


// myApp.directive('irBoxes', [function () {
// 	return {
// 		priority: 0,
// 		template: '<div class="box"></div>',
// 		templateUrl: 'directive.html',
// 		replace: true,
// 		transclude: true,
// 		restrict: 'E',
// 		scope: {},
// 		controller: function($scope, $element, $attrs, $transclude, otherInjectables) {

// 		},
// 		compile: function compile(tElement, tAttrs, transclude) {
// 			return function postLink(scope, iElement, iAttrs, controller) {

// 			}
// 		},
// 		link: function postLink(scope, iElement, iAttrs) {
// 				console.log(iAttrs);
// 		}
// 	};
// }])

myApp.directive('irBoxes', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			console.log(iAttrs.count);
			var arrElement=[],
			element="<div class=box></div>",
			i;
	
			for(i=0 ;i<=iAttrs.count;i++){
				arrElement.push(element);
			}
			iElement.append(arrElement.join(''));
		}
	};
}])