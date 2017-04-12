(function (){
	'use strict'

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function ToBuyController($scope, ShoppingListCheckOffService) {
		var toBuy = this;

		toBuy.items = ShoppingListCheckOffService.getBuyItems();
		toBuy.boughtItems = ShoppingListCheckOffService.getBoughtItems();

		toBuy.updateList = function (index){
			ShoppingListCheckOffService.updateList(index);
		};
	};

	AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
		var alreadyBought = this;

		alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
	};

	function ShoppingListCheckOffService(){
		var service = this;

		service.toBuyItems = [
			{
				name: 'Cookies',
				quantity: 10
			},
			{
				name: 'Brownies',
				quantity: 2
			},
			{
				name: 'Soda',
				quantity: 3
			},
			{
				name: 'Eggs',
				quantity: 6
			},
			{
				name: 'Pizza',
				quantity: 1
			}
		];

		service.boughtItems = [];

		service.updateList = function (index){
			service.boughtItems.push(service.toBuyItems[index]);
			service.toBuyItems.splice(index, 1);
		};

		service.getBuyItems = function () {
	    	return service.toBuyItems;
		};

		service.getBoughtItems = function () {
	    	return service.boughtItems;
		};
	};

})();