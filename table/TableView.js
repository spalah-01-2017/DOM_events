(function() {
	'use strict';

	function TableView(table) {
		this.headers = table.headers;
		this.rows = table.rows;
	}

	TableView.prototype.createTable = function() {
		var table = document.createElement('table');
		var thead = document.createElement('thead');
		var tbody = document.createElement('tbody');
		var cell = document.createElement("td");
		for(var i=0;i<this.headers.length;i++){
			var row = document.createElement("tr");
			var th = document.createElement("th");
      		th.appendChild(document.createTextNode(this.headers[i]));
			thead.appendChild(th);
		}
		for(var i=0;i<this.rows.length;i++){
			var row = document.createElement("tr");
			for(var j=0;j<this.rows[i].length;j++){
				var td = document.createElement("td");
				td.appendChild(document.createTextNode(this.rows[i][j]));
				row.appendChild(td);
			}
			tbody.appendChild(row);
		}
		table.appendChild(thead);
		table.appendChild(tbody);
		return table;
	};

	window.TableView = TableView;
})();