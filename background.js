
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
      });
    }
  chrome.tabs.query(query, callback);