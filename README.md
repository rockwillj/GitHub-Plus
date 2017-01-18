# GitHub Plus

English | [日本語](README.ja.md)

Chrome extension to make a little better use of GitHub.
It provides 10 and a few features for now.

## Install

* Chrome Web Store (coming soon)

## Features

1. Liquid Design
2. Ignore Whitespaces
3. Change Tab Size
4. Expand Commit Messages
5. Remove Ellipsis…
6. No Relative Time
7. Show/Hide All Comments
8. Do Not Merge WIP
9. Close Button to Left
10. Quick Quoting
11. diff/patch file

### 1. Liquid Design

Apply liquid design to GitHub site.
Page content expands to window width.

### 2. Ignore Whitespaces

Ignore Whitespaces when seeing diff in file changes and so on.
Checking `Show spaces`, whitespaces in diff will be shown temporary.

### 3. Change Tab Size

Change tab size (width) in source code, from default `8` to `4` for more readability.

### 4. Expand Commit Messages

Expand all commit messages that are shown collapsed in default.

### 5. Remove Ellipsis…

Remove ellipsis (`…`) from a message and concat split titles
so that long title (the first line) of commit message will not be omitted.

### 6. No Relative Time

Replace relative commit date time (ex. `2 hours ago`, `5 days ago`) with local date time (ex. `Jan 17, 2017`).
Relative date time will pop up by hovering local date time text.

### 7. Show/Hide All Comments

Place the button to show/hide all comments in PR under the text box.

### 8. Do Not Merge WIP

`Merge pull request` button will be disabled when PR title contains the following keywords.

* `WIP` (Work In Progress)
* `DNM` (Do Not Merge)

\* Note: keywords is case-sensitive so `wip` and `dnm` are not matched.

### 9. Close Button to Left

Move `Close` button to left at the bottom of PR / Issue page to prevent from pressing it accidentally.

### 10. Quick Quoting

Selecting range of strings and pressing `Insert a quote` button,
it will be inserted in quoted state in the text box.

\* Note: It is same behavior when pressing `r` (replay) key after selecting range of strings.

### 11. diff/patch file

Add links to show PR changes in `DIFF` / `PATCH` format at PR page sidebar.

## Feedback

* [Issues](/rockwillj/githubplus/issues)
* [Pull Requests](/rockwillj/githubplus/pulls)

## Copyright & License

Copyright © 2017 Josuke Iwata (@rockwillj).

This software is released under the MIT License, see [LICENSE](LICENSE).
