// Use webNavigation.onCommitted event to prevent from flicker by CSS injection in Chrome extension
// @see http://stackoverflow.com/questions/32876835/
chrome.webNavigation.onCommitted.addListener(
    function (details) {
        if (details.frameId == 0) { // 0 indicates the navigation happens in the tab content window
            chrome.tabs.sendMessage(details.tabId, { event: 'onCommitted' });
        }
    },
    { urls: ['*://github.com/*'] }
);
