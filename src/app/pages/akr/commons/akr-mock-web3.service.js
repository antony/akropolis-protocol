(function () {
	'use strict';

	angular.module('akr-commons')
		.service('MAkrWeb3Service', AkrWeb3Service);

	/** @ngInject */
	function AkrWeb3Service($q) {

		var mockAccounts = {
			VOLUNTARY: {
				balance: 20000
			},
			EMERGENCY: {
				balance: 10000
			},
			SHORT_TERM: {
				balance: 5000
			}
		};

		this.hasAccount = function () {
			return $q.when(false);
		};

		this.savingsGoal = function () {
			return $q.when({
				age: 65,
				monthlyIncome: 3500
			});
		};

		this.accountDetails = function (type) {
			return mockAccounts[type];
		};

		//Acropolis External Token
		this.aetBalance = function () {
			return 100;
		};

		this.pensionFunds = function () {
			return $q.when({
				TECH: {
					name: 'Tech',
					allocation: 25,
					description: ''
				},
				SUSTAINABLE: {
					name: 'Sustainable',
					allocation: 25,
					description: ''
				},
				BIOMED: {
					name: 'Biomed',
					allocation: 25,
					description: ''
				},
				ENERGY: {
					name: 'Energy',
					allocation: 25,
					description: ''
				}
			});

		};


	}
})();
