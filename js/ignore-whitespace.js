$(document).bind('ghp:ready', function () {
    var href = location.href;
    var isShowSpaces = !/[?&]w=(1|true)/.test(href);
    if (isShowSpaces) {
        href += (href.indexOf('?') == -1 ? '?' : '&') + 'w=1';
    } else {
        href = href.replace(/([?&])w=(1|true)/, '$1w=0');
    }
    var checked = isShowSpaces ? 'checked="checked" ' : '';

    var input = '<span class="show-file-spaces"><a href="' + href + '"><label>'
        + '<input type="checkbox" ' + checked + '> Show spaces</label></a></span>';
    $(".file-actions").prepend(input);

    $('.show-file-spaces input[type="checkbox"]').click(function () {
        // trigger click link manually because it is prevented in github.com/*/commit/*
        if (/\/commit\//.test(location.href)) {
            $('.show-file-spaces > a')[0].click(); // [0] is needed for click link
        }
    });
});
