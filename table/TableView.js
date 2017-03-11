(function() {
	'use strict';

	function TableView(table, node) {
		this.headrow = table.headers;
		this.rows = table.rows;
	}

	TableView.prototype.createTable = function() {
		var tableNode = document.createElement('table');
		var headcell = document.createElement('th');
		var row = document.createElement('tr');
		var cell = document.createElement('td');
		this.headrow.forEach((head) => {
			headcell.textContent = head;
			row.appendChild(headcell.cloneNode(true));
		})
		tableNode.appendChild(row);
		row = document.createElement('tr');
		this.rows.forEach((rov) => {
			rov.forEach((cel) => {
				cell.textContent = cel;
				row.appendChild(cell.cloneNode(true));
			})
			tableNode.appendChild(row.cloneNode(true));
			row = document.createElement('tr');
		})
		tableNode.setAttribute("border", "2");
		return tableNode;
	};

	window.TableView = TableView;
})();