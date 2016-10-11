$(function () {
    $(document).trigger("ghp:ready");

    $(document).on("pjax:success", function () {
        $(document).trigger("ghp:ready");
    });
});
