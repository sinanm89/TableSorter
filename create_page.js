"use strict";

var url = window.location.host;

// if (url.indexOf("appd") != -1) {
  // chrome.storage.sync.get("flip_estate_wiki", toggle_wikipedia);
// }
// (function create_tables(value) {
  // value = !value.flip_estate_wiki;
  // chrome.storage.sync.set({"flip_estate_wiki": value});
  var query = { active: true, currentWindow: true };
  var sometab;
function callback(tabs) {
  var currentTab = tabs[0]; // there will be only one in this array
  console.log(currentTab); // also has properties like currentTab.id
  sometab = currentTab;
}


chrome.tabs.query(query, callback);


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
      console.log(tbdy);
      console.log(table_div);
      table_div.appendChild(tbl);
    });
    // Get table in html
    // expand every element in table
    // document.getElementsByClassName('ng-scope selected adsDashTreeButton')[0].click();
    // // get key columns
    // var column_key_names = document.querySelectorAll('[id^=gridcolumn-] span')
    // var output = []
    // // get values of each column
    // for(let j=0; j<column_key_names.length-1; j++){
    //   let col_val = column_key_names[j].innerText
    //   output.push(col_val)
    // }

    // var column_values = document.querySelectorAll('[id^=treeview-] tbody tr td');
    // // seek out children, go deep.
    // for(let i=0; i<column_values.length-1; i++){
    //     if(i !== 0 && (i%column_key_names.length) !== 0){
    //       let col_val = column_values[j].innerText
    //       output.append(col_val)
    //     } else {
    //       output.append('\n')
    //     }
        
    // }
    // append each value in order with the keys
    // output html with multiple sorting
    
// })();