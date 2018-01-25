   
// (function readTable() {
console.log('I AM TRYING TO SAVE THE TABLES ON THE PAGE');
// Get a value
document.getElementsByClassName('ng-scope selected adsDashTreeButton')[0].click();
// get key columns

// document.querySelectorAll('tbody [id^=treeview-]')[0].querySelectorAll("td")[6].textContent

var column_key_names = document.querySelectorAll("[id^=gridcolumn-] span.x-column-header-text");

var row_datas = [];
var key_columns = [{title: 'Name'},];

// get values of each column
for(let j=0; j<column_key_names.length; j++){ 
  key_columns.push({ title: column_key_names[j].textContent });
}


var column_values = document.querySelectorAll('tbody [id^=treeview-]');

for(var i=0; i<column_values.length; i++){
  var row = [];
  var collapsed_row = column_values[i].querySelectorAll("td");
  for(let j=0; j <= collapsed_row.length; j++){        
    let val = collapsed_row[j] ? collapsed_row[j].textContent : "";
    row.push(val);
  }
  row_datas.push(row);
}

// Save it using the Chrome extension storage API, no need to sync
chrome.storage.local.set({
  'page_data':{
    'rows_datas': row_datas,
    'key_columns': key_columns
}}, function() {
  // Notify that we saved.
  console.log('Scraped page & saved.');

});