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
  
  chrome.tabs.executeScript(currentTab.id, {
        file: 'onload.js'
  }, function(tabs) {
    chrome.storage.local.get({'page_data': {} }, function(page_data) {
      console.log('READING FROM STORAGE');
      
      var rows_datas = page_data.page_data.rows_datas;
      var key_cols = page_data.page_data.key_columns;
      var col_size = key_cols.length;
      
      // console.log(col_size, rows_datas);
      console.log(rows_datas);

      var tbl = $('#custom_table').DataTable({
          data: rows_datas,
          columns: key_cols,
          paging:   false,
      });

    });
  });
}
chrome.tabs.query(query, callback);