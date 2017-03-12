(function() {
    'use strict';

    function TableView(table, node) {
        // console.error(table, 'TableView constructor should be implemented');
        this.tableHeaders = table.headers;
        this.tableRows = table.rows;

        this.rows = this.tableRows.length;
        this.colums = this.tableHeaders.length;

    }

    TableView.prototype.createTable = function() {
        // console.error('createTable should generate table node with data');
        // return document.createElement('fake-table');

        var tbl = document.createElement("table");
        var tblHead = document.createElement("thead");
        var tblBody = document.createElement("tbody");

		/* create Head */
        var row = document.createElement("tr");
        for (var i = 0; i < this.colums; i++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(this.tableHeaders[i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblHead.appendChild(row);

        // creating all cells
        for (var i = 0; i < this.rows; i++) {

            var row = document.createElement("tr");

            for (var j = 0; j < this.colums; j++) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(this.tableRows[i][j]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            tblBody.appendChild(row);
        }

        tbl.appendChild(tblHead);
        tbl.appendChild(tblBody);

        return tbl;

    };

    window.TableView = TableView;
})();