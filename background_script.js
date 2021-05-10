// Put all the javascript code here, that you want to execute in background.
browser.contextMenus.create({
  id: "highlight-logs",
  title: "Highlight logs"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "highlight-logs") {
    browser.tabs.executeScript({
      file: "highlight_logs.js"
    });
  }
});