$(document).bind("ghp:ready", function () {
    $("a.message:contains('…')").each(function () {
        var $commit = $(this).parent(".commit-title").parent();
        if (!$commit.length) {
            $commit = $(this).closest(".commit-message");
            if (!$commit.length) {
                return;
            }
        }
        var $desc = $commit.children(".commit-desc").children("pre");
        if (!$desc.text()) {
            return;
        }

        // set full title
        var preTitle = $(this).text().slice(0, -1);
        var postTitle = /^….*$/m.exec($desc.text())[0].slice(1);
        $(this).text(preTitle + postTitle);

        // remove fist line with breaks from description
        $desc.text($desc.text().replace(/^.*$/m, "").replace(/^\n+/, ""));
        if ($desc.text() == "") {
            // hide ellipsis button
            $commit.find(".hidden-text-expander").hide();
        }
    });
});
