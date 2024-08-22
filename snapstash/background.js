// background.js
chrome.runtime.onInstalled.addListener(function () {
    // Initialize storage with an empty array if it's not already initialized
    chrome.storage.sync.get('savedTabs', function (data) {
        if (!data.savedTabs) {
          chrome.storage.sync.set({ savedTabs: [] });
        }
    });
  });