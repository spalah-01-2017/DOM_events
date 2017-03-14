(function() {
	'use strict';

	function TableView(table, node) {
		this.table = table;
	}

	TableView.prototype.createTable = function() {
		let table = document.createElement('table');
		let headersRow = document.createElement('tr');

		for (let i = 0; i < this.table.headers.length; i++) {
			let header = document.createElement('th');
			header.textContent = this.table.headers[i];
			headersRow.appendChild(header);
		}

		table.appendChild(headersRow);

		for (let i = 0; i < this.table.rows.length; i++) {
			let row = document.createElement('tr');
			for (let k = 0; k < this.table.headers.length; k++) {
				let tD = document.createElement('td');
				tD.textContent = this.table.rows[i][k] + '';
				row.appendChild(tD);
			}
			table.appendChild(row);
		}

		return table;
	};

	window.TableView = TableView;
})();