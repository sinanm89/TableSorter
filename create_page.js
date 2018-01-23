"use strict";

chrome.storage.local.get('page_data', function(page_data) {
  console.log('READING FROM STORAGE');
  page_data = page_data.page_data;
  var elements = page_data.elements;
  var col_size = page_data.column_size;
  console.log(col_size, elements);
  var tbl = document.createElement('table');
  var table_div = document.getElementById('custom_table');
  tbl.style.width = 'auto';
  // tbl.style.height = 'auto';
  tbl.setAttribute('border', '0');
  var tbdy = document.createElement('tbody');

  for (var i = 0, elem_i = 0; i < elements.length; i++) {
      var tr = document.createElement('tr');
      // elem_i = (i+1)*(j+1)
      for (let j = 0; j < col_size; j++, elem_i++) {
              var td = document.createElement('td');
              td.appendChild(document.createTextNode(elements[elem_i]));
              tr.appendChild(td)
          tr.appendChild(td)
          
      }
      tbdy.appendChild(tr);
  }
  // document
  console.log('end stuff ----');
  tbl.appendChild(tbdy);
  table_div.appendChild(tbl);


  table_div.style.width = 'auto';
  table_div.style.height = 'auto';
});
