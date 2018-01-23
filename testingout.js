// chrome.browserAction.onClicked.addListener(function (tab) {
//   console.log(tab);
//   chrome.windows.create({'url': 'table.html', 'type': 'popup'}, function(window) {
//    	console.log(window);
//    	var column_values = document.querySelectorAll('[id^=treeview-] tbody tr td')
//    	console.log(column_values);
//    });

//  });

function changeBackgroundColor(color) {
  var script = 'document.body.style.backgroundColor="' + color + '";';
  // See https://developer.chrome.com/extensions/tabs#method-executeScript.
  // chrome.tabs.executeScript allows us to programmatically inject JavaScript
  // into a page. Since we omit the optional first argument "tabId", the script
  // is inserted into the active tab of the current window, which serves as the
  // default.
  chrome.tabs.executeScript({
    code: script
  });
}

/**
 * Gets the saved background color for url.
 *
 * @param {string} url URL whose background color is to be retrieved.
 * @param {function(string)} callback called with the saved background color for
 *     the given url on success, or a falsy value if no color is retrieved.
 */
function getSavedBackgroundColor(url, callback) {
  // See https://developer.chrome.com/apps/storage#type-StorageArea. We check
  // for chrome.runtime.lastError to ensure correctness even when the API call
  // fails.
  chrome.storage.sync.get(url, (items) => {
    callback(chrome.runtime.lastError ? null : items[url]);
  });
}

/**
 * Sets the given background color for url.
 *
 * @param {string} url URL for which background color is to be saved.
 * @param {string} color The background color to be saved.
 */
function saveBackgroundColor(url, color) {
  var items = {};
  items[url] = color;
  // See https://developer.chrome.com/apps/storage#type-StorageArea. We omit the
  // optional callback since we don't need to perform any action once the
  // background color is saved.
  chrome.storage.sync.set(items);
}

// This extension loads the saved background color for the current tab if one
// exists. The user can select a new background color from the dropdown for the
// current page, and it will be saved as part of the extension's isolated
// storage. The chrome.storage API is used for this purpose. This is different
// from the window.localStorage API, which is synchronous and stores data bound
// to a document's origin. Also, using chrome.storage.sync instead of
// chrome.storage.local allows the extension data to be synced across multiple
// user devices.
document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var dropdown = document.getElementById('dropdown');

    // Load the saved background color for this page and modify the dropdown
    // value, if needed.
    getSavedBackgroundColor(url, (savedColor) => {
      if (savedColor) {
        changeBackgroundColor(savedColor);
        dropdown.value = savedColor;
      }
    });

    // Ensure the background color is changed and saved when the dropdown
    // selection changes.
    dropdown.addEventListener('change', () => {
      changeBackgroundColor(dropdown.value);
      saveBackgroundColor(url, dropdown.value);
    });
  });
});

chrome.browserAction.onClicked.addListener(function (tab) {
  console.log(tab);
  chrome.windows.create({'url': 'table.html', 'type': 'popup'}, function(window) {
   	console.log(window);
   	var column_values = document.querySelectorAll('[id^=treeview-] tbody tr td')
   	console.log(column_values);
   });

 });

// --------------------------------------------------------
// onload.js
// --------------------------------------------------------

// somewhere_else.js
chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {
    console.log(response.dom);
  });


// parse_data.js
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getDOM")
   sendResponse({dom: "The dom that you want to get"});
 else
   sendResponse({kalem: "patates"}); // Send nothing..
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });