(function() {
    'use strict';

    function Table(headers, data) {
        this.headers = headers;
        this.rows = data.map(function(row) {
            return headers.map(function(header) {
                return row[header];
            });
        });
    }

    Table.prototype.addRow = function(row) {
        this.rows.push(row);
    };

    Table.prototype.addRows = function(rows) {
        rows.forEach(this.addRow.bind(this));
    };

    Table.prototype.sort = function(colNum,method) {
        this.rows.sort(function(a,b) {
            var aCellData = a[colNum];
            var bCellData = b[colNum];
            var areNums = [aCellData,bCellData].every(function(el) {return typeof el == 'number'});

            function _sort(a,b) {
                return method === 'desc' ? a < b : a > b;
            }
            return areNums ? _sort(aCellData,bCellData) : _sort(String(aCellData).toUpperCase(),String(bCellData).toUpperCase());
        });
    };

    Table.prototype.addColumn = function(header, data) {
        this.headers.push(header);

        data.forEach(function(value,i) {
            if(!this.rows[i]) {
                this.rows.push(Array.apply(null, Array(this.headers.length - 1)));
            }
            this.rows[i].push(value);      
        },this);
    };

    Table.prototype.showSize = function() {
        return {
            rows: this.rows.length,
            columns: this.headers.length
        };
    };

    Table.prototype.getData = function() {
        return this.rows.map(function(row) {
            return this.headers.reduce(function(obj,key,i) {
                return obj[key] = row[i], obj;
            }, {});
        },this);
    };

    Table.prototype.removeRow = function(rowNum) {
        this.rows.splice(rowNum,1);
    };

    Table.prototype.filterBy = function(colName) {
        var idx = this.headers.indexOf(colName);
        return this.rows.filter(function(row) {
            return row[idx] || row[idx] === 0;
        });
    };

    window.Table = Table;
})();
