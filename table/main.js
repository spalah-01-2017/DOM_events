(function() {
	'use strict';
	//для того чтобы не создавать функцию отдельно и не дублировать код решил сделать так. Можно ли так делать?
	document.addEventListener("DOMContentLoaded", create);
	function create() {
		var tableDataArea = document.querySelector('.table-data');
		var tableMountNode = document.querySelector('.table');
		var tableHeaders = JSON.parse(tableDataArea.value)[0];
		var tableData = JSON.parse(tableDataArea.value)[1];
		var table = new Table(tableHeaders, tableData);
		var tableView = new TableView(table);

		//нормально ли делать так: проверять на наличие потомка и удалять его, а затем просто заново добавлять таблицу?
		//или лучше сделать как-то по другому?
		if(tableMountNode.firstChild)
			tableMountNode.removeChild(tableMountNode.firstChild);
		tableMountNode.appendChild(tableView.createTable());

	}

	var createTable = document.querySelector('#createTable');
	createTable.addEventListener("click", create);

})();

