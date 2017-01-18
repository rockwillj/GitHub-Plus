var forceToShowSpacesOnce = false;

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (forceToShowSpacesOnce) {
            forceToShowSpacesOnce = false;
            return {};
        }

        var url = details.url;
        if (/[?&]w=off/.test(url)) {
            if (url.indexOf('?w=off&') != -1) {
                url = url.replace('?w=off&', '?');
            } else {
                url = url.replace(/[?&]w=off[^&]*/, '');
            }
            forceToShowSpacesOnce = true;
        } else if (/[?&]w=/.test(url)) {
            return {};
        } else {
            url += (url.indexOf('?') == -1 ? '?' : '&') + 'w=';
        }
        return { redirectUrl: url };
    },
    { urls: ['*://github.com/*/pull/*', '*://github.com/*/commit/*'] },
    ['blocking']
);
