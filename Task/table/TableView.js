(function() {
	'use strict';

	function TableView(table, node) {
        this.tableHeaders = table.headers;
        this.tableRows = table.rows;
	}

	TableView.prototype.createTable = function() {
		var tbl = document.createElement("table");
		var tblBody = document.createElement("tbody");
		var tblHead = document.createElement("thead");
		var headRow = document.createElement("tr");
		for (var i = 0; i < this.tableHeaders.length; i++){ 
			var tblHeadTh = document.createElement("th");    
			var thText = document.createTextNode(this.tableHeaders[i]); 
			tblHeadTh.appendChild(thText);
			tblBody.appendChild(tblHead);
        	tblHead.appendChild(headRow);
        	headRow.appendChild(tblHeadTh);
		}
		for (var i = 0; i < this.tableRows.length; i++) {
			var row = document.createElement("tr");
		   for (var j = 0; j < this.tableHeaders.length; j++) {
			var cell = document.createElement("td");
        	cell.setAttribute("style", "border: 1px solid #8d8d8d");
		    var cellText = document.createTextNode((this.tableRows[i][j] == undefined)?"":this.tableRows[i][j]);
			tblBody.appendChild(row);
        	row.appendChild(cell);     
		    cell.appendChild(cellText);
			 
		   }
		}
		tbl.appendChild(tblHead);
        tbl.appendChild(tblBody);

        Object.assign(tbl.style, {width: '500px',
    								border: '2px dashed #8d8d8d',
    								borderCollapse: 'collapse',
    								margin: '20px',
    								textAlign: 'center'});
        Object.assign(tblHead.style, {color: '#ffc251',
    									background: '#8d8d8d'});
        
        return tbl;
	};

	window.TableView = TableView;
})();