chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.ib, {
        file: 'toggle_nav_panel.js'
    });
});

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.executeScript(tab.ib, {
        file: 'toggle_nav_panel.js'
    });
});
