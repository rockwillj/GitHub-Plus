$(document).bind("ghp:ready", function () {
    var keywords = "WIP, DNM".split(",");

    var $input = $(".gh-header-edit input#issue_title");
    updateMergeButtonEnabled($input.val());
    $(".gh-header-edit button[type='submit']").click(function (event) {
        updateMergeButtonEnabled($input.val());
    });

    function updateMergeButtonEnabled(title) {
        var disabled = false;
        for (let keyword of keywords) {
            if (title.indexOf(keyword.trim()) != -1) {
                disabled = true;
                break;
            }
        }
        $(".merge-message button").prop("disabled", disabled);
    }
});
