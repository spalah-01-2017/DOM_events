(function() {
	'use strict';

	var tableDataArea = document.querySelector('.table-data');
	var tableMountNode = document.querySelector('.table');
	var tableHeaders = JSON.parse(tableDataArea.value)[0];
	var tableData = JSON.parse(tableDataArea.value)[1];
	var table = new Table(tableHeaders, tableData);

	var tableView = new TableView(table);

	var button = document.querySelector('button');

	function addTableNode (e) {
		tableDataArea = document.querySelector('.table-data');
		tableMountNode = document.querySelector('.table');
		tableHeaders = JSON.parse(tableDataArea.value)[0];
		tableData = JSON.parse(tableDataArea.value)[1];
		table = new Table(tableHeaders, tableData);
		tableView = new TableView(table);

		document.querySelector('table').remove();
		tableMountNode.appendChild(tableView.createTable());
	}

	button.addEventListener('click', addTableNode);

	tableMountNode.appendChild(tableView.createTable());
})();