(function() {
	'use strict';

	var tableDataArea = document.querySelector('.table-data');
	var tableMountNode = document.querySelector('.table');
	var tableHeaders = JSON.parse(tableDataArea.value)[0];
	var tableData = JSON.parse(tableDataArea.value)[1];
	var table = new Table(tableHeaders, tableData);

	var tableView = new TableView(table);
	tableMountNode.appendChild(tableView.createTable());
})();