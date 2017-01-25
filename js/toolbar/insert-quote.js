$(document).bind("ghp:ready", function () {
    $("button.js-toolbar-item").click(function (event) {
        if ($(this).attr("data-ga-click").indexOf("quote") != -1) {
            var selection = document.getSelection().toString();
            if (!selection) {
                return;
            }
            event.stopPropagation();

            var $textarea = $(this).closest("form").find("textarea");
            var input = $textarea.val();
            var text = (input ? input + "\n\n" : "") + selection.replace(/^/mg, "> ") + "\n\n";
            $textarea.val(text).focus();
        }
    });
});
