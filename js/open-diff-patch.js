$(document).bind("ghp:ready", function () {
    var match = /\/pull\/(\d+)/.exec(location.href);
    if (match == null || match.length != 2) {
        return;
    }
    var pr = match[1];
    var item = '<div class="discussion-sidebar-item">'
        + 'Open <a href="' + pr + '.patch" class="open-diff-patch" data-skip-pjax>' + pr + '.patch</a>'
        + ' or <a href="' + pr + '.diff" class="open-diff-patch" data-skip-pjax>' + pr + '.diff</a>'
        + '</div>';
    $("#partial-discussion-sidebar").append(item);
});
