# GitHub Plus

English | [日本語](README.ja.md)

<img src="image/icon512.png" alt="GitHub Plus" width="256"/>

Chrome extension to make a little better use of GitHub.
It provides 10 and a few features for now.

## Install

* [Chrome Web Store](https://chrome.google.com/webstore/detail/github-plus/lndphafdikhmpgopmchckooegfnifafm)

## Features

1. [Liquid Design](#liquid_design)
2. [Ignore Whitespaces](#ignore_whitespaces)
3. [Change Tab Size](#change_tab_size)
4. [Expand Commit Messages](#expand_commit_messages)
5. [Remove Ellipsis…](#remove_ellipsis)
6. [No Relative Time](#no_relative_time)
7. [Show/Hide All Comments](#show_hide_all_comments)
8. [Do Not Merge WIP](#do_not_merge_wip)
9. [Close Button to Left](#close_button_to_left)
10. [Quick Quoting](#quick_quoting)
11. [diff/patch file](#diff_patch_file)

### <a name="liquid_design"></a>1. Liquid Design

#### Before

![Liquid Design before](image/1_Liquid_Design_before.png)

#### After

![Liquid Design after](image/1_Liquid_Design_after.png)

Apply liquid design to GitHub site.
Page content expands to window width.

### <a name="ignore_whitespaces"></a>2. Ignore Whitespaces

#### Before

![Ignore Whitespaces before](image/2_Ignore_Whitespaces_before.png)

#### After

![Ignore Whitespaces after](image/2_Ignore_Whitespaces_after.png)

Ignore Whitespaces when seeing diff in file changes and so on.
Checking `Show spaces`, whitespaces in diff will be shown temporary.

\* Note: Doe to GitHub behavior, in ignoring whitespaces,
<img src="image/octicon-plus.png" alt="Plus" width="16"/>
button is not shown and you cannot insert a comment to the line.
Checking `Show spaces` to disable the feature temporarily, the button will be shown.

### <a name="change_tab_size"></a>3. Change Tab Size

#### Before

![Change Tab Size before](image/3_Change_Tab_Size_before.png)

#### After

![Change Tab Size after](image/3_Change_Tab_Size_after.png)

Change tab size (width) in source code, from default `8` to `4` for more readability.

### <a name="expand_commit_messages"></a>4. Expand Commit Messages

#### Before

![Expand Commit Messages before](image/4_Expand_Commit_Messages_before.png)

#### After

![Expand Commit Messages after](image/4_Expand_Commit_Messages_after.png)

Expand all commit messages that are shown collapsed in default.

### <a name="remove_ellipsis"></a>5. Remove Ellipsis…

#### Before

![Remove Ellipsis… before](image/5_Remove_Ellipsis…_before.png)

#### After

![Remove Ellipsis… after](image/5_Remove_Ellipsis…_after.png)

Remove ellipsis (`…`) from a message and concat split titles
so that long title (the first line) of commit message will not be omitted.

### <a name="no_relative_time"></a>6. No Relative Time

#### Before

![No Relative Time before](image/6_No_Relative_Time_before.png)

#### After

![No Relative Time after](image/6_No_Relative_Time_after.png)

Replace relative commit date time (ex. `2 hours ago`, `5 days ago`) with local date time (ex. `Jan 17, 2017`).
Relative date time will pop up by hovering local date time text.

### <a name="show_hide_all_comments"></a>7. Show/Hide All Comments

#### "Show all outdated" Button

![Show All Comments](image/7_Show_All_Comments.png)

#### "Hide all outdated" Button

![Hide All Comments](image/7_Hide_All_Comments.png)

Place the button to show/hide all comments in PR under the text box.

### <a name="do_not_merge_wip"></a>8. Do Not Merge WIP

![Do Not Merge WIP](image/8_Do_Not_Merge_WIP.png)

`Merge pull request` button will be disabled when PR title contains the following keywords.

* `WIP` (Work In Progress)
* `DNM` (Do Not Merge)

\* Note: keywords is case-sensitive so `wip` and `dnm` are not matched.

### <a name="close_button_to_left"></a>9. Close Button to Left

![Close Button to Left](image/9_Close_Button_to_Left.png)

Move `Close` button to left at the bottom of PR / Issue page to prevent from pressing it accidentally.

### <a name="quick_quoting"></a>10. Quick Quoting

![Quick Quoting](image/10_Quick_Quoting.png)

Selecting range of strings and pressing `Insert a quote` button,
it will be inserted in quoted state in the text box.

\* Note: It is same behavior when pressing `r` (reply) key after selecting range of strings.

### <a name="diff_patch_file"></a>11. diff/patch file

![diff/patch file](image/11_diff_patch_file.png)

Add links to show PR changes in `DIFF` / `PATCH` format at PR page sidebar.

## Known Issues

- In "Ignore Whitespaces" <img src="image/octicon-plus.png" alt="Plus" width="16"/> button is not shown (GitHub behavior)
  - Checking `Show spaces` to disable the feature temporarily, the button will be shown

## Feedback

* [Issues](https://github.com/rockwillj/GitHub-Plus/issues)
* [Pull Requests](https://github.com/rockwillj/GitHub-Plus/pulls)

## Copyright & License

Copyright © 2017 Josuke Iwata (@rockwillj).

This software is released under the MIT License, see [LICENSE](LICENSE).
