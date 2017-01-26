$(document).bind("ghp:ready", function () {
    $("relative-time").each(function () {
        // exchange relative-time for local-time
        var datetime = $(this).attr("datetime");
        var title = $(this).attr("title");
        var text = $(this).text();
        $(this).after('<local-time datetime="' + datetime
            + '" title="' + text
            + '">' + title + '</local-time>').hide();
    });
});
