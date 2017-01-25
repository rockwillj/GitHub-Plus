# GitHub Plus

[English](README.md) | 日本語

<img src="image/icon512.png" alt="GitHub Plus" width="256"/>

GitHub が少しだけ使いやすくなる Chrome 拡張です。
今のところ 10 と少しの機能を提供しています。

## インストール

* [Chrome ウェブストア](https://chrome.google.com/webstore/detail/github-plus/lndphafdikhmpgopmchckooegfnifafm)

## 機能

1. [リキッドデザイン](#liquid_design)
2. [空白の無視](#ignore_whitespaces)
3. [タブ幅の変更](#change_tab_size)
4. [コミットログの展開](#expand_commit_messages)
5. [省略記号 (…) の除去](#remove_ellipsis)
6. [ローカルタイム表示](#no_relative_time)
7. [全コメントの表示/非表示](#show_hide_all_comments)
8. [WIP のマージ禁止](#do_not_merge_wip)
9. [Close ボタンを左寄せ](#close_button_to_left)
10. [素早く引用](#quick_quoting)
11. [diff/patch ファイル](#diff_patch_file)

### <a name="liquid_design"></a>1. リキッドデザイン

#### Before

![Liquid Design before](image/1_Liquid_Design_before.png)

#### After

![Liquid Design after](image/1_Liquid_Design_after.png)

GitHub サイトにリキッドデザインを適用します。
ページコンテンツがウィンドウ幅まで広がります。

### <a name="ignore_whitespaces"></a>2. 空白の無視

#### Before

![Ignore Whitespaces before](image/2_Ignore_Whitespaces_before.png)

#### After

![Ignore Whitespaces after](image/2_Ignore_Whitespaces_after.png)

ファイル変更などで差分を見るときに空白を無視します。
`Show spaces` をチェックすると一時的に空白の差分が表示されます。

※ 注： GitHub の仕様により、空白を無視した状態だと
<img src="image/octicon-plus.png" alt="Plus" width="16"/>
ボタンが表示されなくなり行にコメントが残せなくなるようです。
`Show spaces` をチェックしてこの機能を一時的に無効にするとボタンが表示されます。

### <a name="change_tab_size"></a>3. タブ幅の変更

#### Before

![Change Tab Size before](image/3_Change_Tab_Size_before.png)

#### After

![Change Tab Size after](image/3_Change_Tab_Size_after.png)

読みやすくするためソースコードのタブ幅をデフォルトの `8` から `4` に変更します。

### <a name="expand_commit_messages"></a>4. コミットログの展開

#### Before

![Expand Commit Messages before](image/4_Expand_Commit_Messages_before.png)

#### After

![Expand Commit Messages after](image/4_Expand_Commit_Messages_after.png)

デフォルトで折り畳まれて表示されるコミットログを全て展開します。

### <a name="remove_ellipsis"></a>5. 省略記号 (…) の除去

#### Before

![Remove Ellipsis… before](image/5_Remove_Ellipsis…_before.png)

#### After

![Remove Ellipsis… after](image/5_Remove_Ellipsis…_after.png)

コミットログのタイトル (1行目) が長い場合に省略されないように、
省略記号 (`…`) を除去して分割されたタイトルを結合して表示します。

### <a name="no_relative_time"></a>6. ローカルタイム表示

#### Before

![No Relative Time before](image/6_No_Relative_Time_before.png)

#### After

![No Relative Time after](image/6_No_Relative_Time_after.png)

相対的なコミット日時 (例：`2 hours ago`, `5 days ago`) をローカルタイム (例：`Jan 17, 2017`) で表示します。
ローカルタイムの日時文字列をホバーすると相対的な日時がポップアップ表示されます。

### <a name="show_hide_all_comments"></a>7. 全コメントの表示/非表示

#### "Show all outdated" ボタン

![Show All Comments](image/7_Show_All_Comments.png)

#### "Hide all outdated" ボタン

![Hide All Comments](image/7_Hide_All_Comments.png)

PR の全レビューコメントを一括で表示/非表示にするボタンがテキストボックス下に配置されます。

### <a name="do_not_merge_wip"></a>8. WIP のマージ禁止

![Do Not Merge WIP](image/8_Do_Not_Merge_WIP.png)

PR タイトルに以下のキーワードが含まれていると `Merge pull request` ボタンが無効になります。

* `WIP` (Work In Progress)
* `DNM` (Do Not Merge)

※ 大文字小文字は区別されるため `wip` や `dnm` はキーワード対象外です。

### <a name="close_button_to_left"></a>9. Close ボタンを左寄せ

![Close Button to Left](image/9_Close_Button_to_Left.png)

押し間違えを防ぐために PR / Issue ページ最下部の `Close` ボタンを左寄せにします。

### <a name="quick_quoting"></a>10. 素早く引用

![Quick Quoting](image/10_Quick_Quoting.png)

文字列を範囲選択して `Insert a quote` ボタンを押すと、
その文字列が引用された状態でテキストボックスに挿入されます。

※ 文字列を範囲選択して `r` (reply) キーを押したときと同じ挙動になります。

### <a name="diff_patch_file"></a>11. diff/patch ファイル

![diff/patch file](image/11_diff_patch_file.png)

PR ページのサイドバーに PR の変更内容を `DIFF` / `PATCH` 形式で表示するリンクが追加されます。

## 既知の問題

- 「空白の無視」により diff に <img src="image/octicon-plus.png" alt="Plus" width="16"/> ボタンが表示されなくなる (GitHub の仕様)
  - `Show spaces` をチェックしてこの機能を一時的に無効にするとボタンが表示される

## フィードバック

* [Issues](https://github.com/rockwillj/GitHub-Plus/issues) (日本語 OK)
* [Pull Requests](https://github.com/rockwillj/GitHub-Plus/pulls) (日本語 OK)

## Copyright & License

Copyright © 2017 Josuke Iwata (@rockwillj).

This software is released under the MIT License, see [LICENSE](LICENSE).
