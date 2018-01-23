   
// (function readTable() {
console.log('I AM TRYING TO SAVE THE TABLES ON THE PAGE');
// Get a value
document.getElementsByClassName('ng-scope selected adsDashTreeButton')[0].click();
// get key columns

// document.querySelectorAll('tbody [id^=treeview-]')[0].querySelectorAll("td")[6].textContent

var column_key_names = document.querySelectorAll("[id^=gridcolumn-] span.x-column-header-text");

var output = ['Name'];
var key_names = [];

// get values of each column

for(let j=0; j<column_key_names.length; j++){
  output.push(column_key_names[j].textContent);
}

// var column_values = document.querySelectorAll('[id^=treeview-] tbody tr td div span:not(.x-tree-node-text)');

var column_values = document.querySelectorAll('tbody [id^=treeview-]');

for(var i=0; i<column_values.length+1; i++){
    // if(i !== 0 && (i%column_key_names.length+1) !== 0){
      for(let j=0; j<column_values[i].querySelectorAll("td").length+1; j++){        

        let val = column_values[i].querySelectorAll("td")[j] ? column_values[i].querySelectorAll("td")[j].textContent : "";
        output.push(val);
    }
}
console.log(output);
var results = {
  'page_data':{
    'elements': output,
    'column_size': column_key_names.length + 1
}};
// Save it using the Chrome extension storage API.
chrome.storage.local.set(results, function() {
  // Notify that we saved.
  console.log('Settings saved');

});