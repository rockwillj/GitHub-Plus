var forceToShowSpacesOnce = false;

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (forceToShowSpacesOnce) {
            forceToShowSpacesOnce = false;
            return {};
        }

        var url = details.url;
        if (/[?&]w=0/.test(url)) {
            if (url.indexOf('?w=0&') != -1) {
                url = url.replace('?w=0&', '?');
            } else {
                url = url.replace(/[?&]w=0[^&]*/, '');
            }
            forceToShowSpacesOnce = true;
        } else if (/[?&]w=(1|true)/.test(url)) {
            return {};
        } else {
            url += (url.indexOf('?') == -1 ? '?' : '&') + 'w=1';
        }
        return { redirectUrl: url };
    },
    { urls: ['*://github.com/*/pull/*', '*://github.com/*/commit/*'] },
    ['blocking']
);
