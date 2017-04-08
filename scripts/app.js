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

		toBuy.updateList = function (toBuyList, boughtItemsList, index){
			ShoppingListCheckOffService.updateList(toBuyList, boughtItemsList, index);
		};
	};

	AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
		var alreadyBought = this;

		alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
		alreadyBought.flag = ShoppingListCheckOffService.getFlag();
	};

	function ShoppingListCheckOffService(){
		var service = this;

		var toBuyItems = [
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

		var boughtItems = [];

		var flag = {
			toBuy: true,
			bought: true
		}

		console.log(flag.bought);
		console.log(boughtItems);

		service.updateList = function (toBuyList, boughtItemsList, index){
			var item = {
				name: toBuyList[index].name,
				quantity: toBuyList[index].quantity
			}

			boughtItemsList.push(item);
			toBuyList.splice(index, 1);

			if (boughtItemsList[0] === ''){
				flag.bought = false;
			};

			console.log(flag.bought);
			console.log(boughtItemsList);
		};

		service.getBuyItems = function () {
	    	return toBuyItems;
		};

		service.getBoughtItems = function () {
	    	return boughtItems;
		};

		service.getFlag = function () {
	    	return flag;
		};
	};

})();