//NOT WORKING YET

(function() {
	'use strict';

	function TableView(table, node) {
		this.table = table;
		console.error(table, 'TableView constructor should be implemented');
	}

	TableView.prototype.createTable = function() {
		// creates a <table> element and a <tbody> element
		var tbl = document.createElement("table");
		var tblBody = document.createElement("tbody");

		// creating all cells
		for (var i = 0; i < 2; i++) {
			// creates a table row
			var row = document.createElement("tr");

			//TODO: in for (var i = 0; i < 1 ; i++) { //insert headers (<th>) into the first row
			//TODO: in for (var i = 1; i < rows count ; i++) { //insert cells (<td>) into all rows except headers row

			for (var j = 0; j < 2; j++) {
				// Create a <td> element and a text node, make the text
				// node the contents of the <td>, and put the <td> at
				// the end of the table row
				var cell = document.createElement("td");
				// var cellText = document.createTextNode("cell in row "+i+", column "+j);


				//get each cell
				this.table.rows.forEach(function(row, i){
					row.forEach(function(cell, ind){
						this.cellContent = cell;
					})
				});


				/* TODO:
				append each header to cell (cell.appendChild(headerCellContent))
				while this.table.headers length, then go to the next line
				*/
				// var headerCellText = document.createTextNode(this.headerCellContent);

				//TODO: get each table row and put it into cellText variable
				var cellText = document.createTextNode(this.cellContent);




				cell.appendChild(cellText);
				row.appendChild(cell);
			}
			// add the row to the end of the table body
			tblBody.appendChild(row);
		}

		// put the <tbody> in the <table>
		tbl.appendChild(tblBody);


		console.error('createTable should generate table node with data');
		return document.createElement('fake-table');
	};

	window.TableView = TableView;
})();