(function() {
	'use strict';

	var button = document.querySelector('button');
	button.addEventListener('click', createTable)

	function createTable() {
        var tableDataArea = document.querySelector('.table-data');
        var tableMountNode = document.querySelector('.table');
        tableMountNode.innerHTML = '';
        var tableHeaders = JSON.parse(tableDataArea.value)[0];
        var tableData = JSON.parse(tableDataArea.value)[1];
        var table = new Table(tableHeaders, tableData);

        var tableView = new TableView(table);
        tableMountNode.appendChild(tableView.createTable());
    }

})();