"use strict";

    var ee = chrome.storage.local.get('page_data', function(result) {
      console.log('READING FROM STORAGE');
      console.log(result);

      var tbl = document.createElement('table');
      var table_div = document.getElementById('custom_table');
      tbl.style.width = '100%';
      tbl.setAttribute('border', '1');
      var tbdy = document.createElement('tbody');
      for (var i = 0; i < 3; i++) {
          var tr = document.createElement('tr');
          for (var j = 0; j < 2; j++) {
              if (i == 2 && j == 1) {
                  break
              } else {
                  var td = document.createElement('td');
                  td.appendChild(document.createTextNode('\u0020'))
                  i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                  tr.appendChild(td)
              }
          }
          tbdy.appendChild(tr);
      }
      // document
      console.log('end stuff ----');
      tbl.appendChild(tbdy);
      table_div.appendChild(tbl);
    });
    