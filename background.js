
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
  console.log(currentTab.url); // also has properties like currentTab.id
  chrome.tabs.executeScript(currentTab.id, {
        file: 'onload.js'
  }, function(tabs){
    
    chrome.storage.local.get({'page_data': {} }, function(page_data) {
    console.log('READING FROM STORAGE');
    page_data = page_data.page_data;
    var elements = page_data.elements;
    var col_size = page_data.column_size;
    console.log(col_size, elements);
    var tbl = document.createElement('table');
    var table_div = document.getElementById('custom_table');
    tbl.style.width = 'auto';
    // tbl.style.height = 'auto';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');

    for (var i = 0, elem_i = 0; i < elements.length/col_size; i++) {
        var tr = document.createElement('tr');
        for (let j = 0; j < col_size; j++) {
          var td = document.createElement('td');
          // if ( typeof(elements[elem_i]) === 'undefined') { let element = " "; }
          // else { let element = elements[elem_i]; }

          td.appendChild(document.createTextNode(elements[elem_i]));
          tr.appendChild(td)
          elem_i++;
            // } else {
            // }
                // i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
            // tr.appendChild(td)
            
        }
        tbdy.appendChild(tr);
    }
    // document
    console.log('end stuff ----');
    tbl.appendChild(tbdy);
    table_div.appendChild(tbl);


    table_div.style.width = '100%';
    table_div.style.height = '100%';
  });
});
}
chrome.tabs.query(query, callback);