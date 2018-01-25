"use strict";

chrome.storage.local.get('page_data', function(page_data) {
  console.log('READING FROM STORAGE');
  page_data = page_data.page_data;
  var rows_datas = page_data.rows_datas;
  var key_cols = page_data.key_columns;
  var col_size = page_data.length;
  
  console.log(col_size, rows_datas);
  
  var tbl = document.getElementById('custom_table');

  var columns = [];
  for (var i = 0, i < col_size; i++) { columns.push({title: elements[i]}); }

  tbl.DataTable( {
      data: rows_datas,
      columns: key_cols
  } );

  tbl.style.width = 'auto';
  tbl.style.height = 'auto';
});
