chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.event == 'onCommitted') {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = chrome.extension.getURL('css/liquid-design.css');
        (document.head || document.documentElement).appendChild(link);
    }
});
