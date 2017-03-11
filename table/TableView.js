(function() {
	'use strict';

	function TableView(table, node) {
		console.error(table, 'TableView constructor should be implemented');
	}

	TableView.prototype.createTable = function() {
		console.error('createTable should generate table node with data');
		return document.createElement('fake-table');
	};

	window.TableView = TableView;
})();