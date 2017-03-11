
'use strict';

var tableDataArea = document.querySelector('.table-data');
var tableMountNode = document.querySelector('.table');
var tableHeaders = JSON.parse(tableDataArea.value)[0];
var tableData = JSON.parse(tableDataArea.value)[1];
var table = new Table(tableHeaders, tableData);

var tableViev = new TableView(table);
var button = document.querySelector('button');
function addNewTable() {
	tableMountNode.innerHTML = '';
	tableMountNode.appendChild(tableViev.createTable());
}
button.setAttribute('onclick', 'addNewTable()');