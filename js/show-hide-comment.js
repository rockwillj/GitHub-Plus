$(document).bind("ghp:ready", function () {
    if ($(".outdated-comment").length) {
        var unfoldIcon = $("svg.octicon-unfold").prop("outerHTML");
        var foldIcon = $("svg.octicon-fold").prop("outerHTML");

        var button = '<div class="discussion-item discussion-item-body">'
            + '<div class="discussion-item-header outdated-comment">'
            + '<span class="discussion-item-icon show-outdated-button" style="padding-left: 4px">' + unfoldIcon + '</span>'
            + '<span class="discussion-item-icon hide-outdated-button" style="padding-left: 4px">' + foldIcon + '</span>'
            + '<button type="button" class="btn btn-sm btn-outline outdated-comment-label show-outdated-button js-show-hide-comment">'
            + unfoldIcon + ' Show all outdated</button>'
            + '<button type="button" class="btn btn-sm btn-outline outdated-comment-label hide-outdated-button js-show-hide-comment">'
            + foldIcon + ' Hide all outdated</button>'
            + '</div></div>';

        $(".pull-discussion-timeline .timeline-comment-wrapper:first").after(button);

        $(".js-show-hide-comment").click(function () {
            var toOpen = $(this).hasClass("show-outdated-button");
            $(".outdated-comment").toggleClass("open", toOpen);
        });
    }
});
