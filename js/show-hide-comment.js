$(document).bind("ghp:ready", function () {
    if ($(".outdated-diff-comment-container").length) {
        var unfoldIcon = $("svg.octicon-unfold").prop("outerHTML");
        var foldIcon = $("svg.octicon-fold").prop("outerHTML");

        var button = '<div class="discussion-item outdated-diff-comment-container">'
            + '<div class="discussion-item-header">'
            + '<span class="discussion-item-icon discussion-item-toggle-closed">' + unfoldIcon + '</span>'
            + '<span class="discussion-item-icon discussion-item-toggle-open">' + foldIcon + '</span>'
            + '<button type="button" class="btn-link discussion-item-toggle discussion-item-toggle-closed js-show-hide-comment">'
            + unfoldIcon + ' Show all comments</button>'
            + '<button type="button" class="btn-link discussion-item-toggle discussion-item-toggle-open js-show-hide-comment">'
            + foldIcon + ' Hide all comments</button>'
            + '</div></div>';

        $(".pull-discussion-timeline .timeline-comment-wrapper:first").after(button);

        $(".js-show-hide-comment").click(function () {
            var toOpen = $(this).hasClass("discussion-item-toggle-closed");
            $(".outdated-diff-comment-container").toggleClass("open", toOpen);
        });
    }
});
