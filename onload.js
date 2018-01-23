   
// (function readTable() {
console.log('I AM TRYING TO READ TABLES ON PAGE');
// Get a value
document.getElementsByClassName('ng-scope selected adsDashTreeButton')[0].click();
// get key columns
var column_key_names = document.querySelectorAll('[id^=gridcolumn-] span');
var output = [];
// get values of each column
console.log(column_key_names);
for(let j=0; j<column_key_names.length-1; j++){
  let col_val = column_key_names[j].innerText;
  output.push(col_val);
}

var column_values = document.querySelectorAll('[id^=treeview-] tbody tr td');
// seek out children, go deep.
for(let i=0; i<column_values.length-1; i++){
    if(i !== 0 && (i%column_key_names.length) !== 0){
      let col_val = column_values[j].innerText;
      output.append(col_val);
    // } else {
      // output.append('\n')
    }
    
}
// Save it using the Chrome extension storage API.
chrome.storage.sync.set({'page_data': output}, function() {
  // Notify that we saved.
  console.log('Settings saved');
});
