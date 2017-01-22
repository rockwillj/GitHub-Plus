# GitHub Plus

[English](README.md) | 日本語

<img src="image/icon512.png" alt="GitHub Plus" width="256"/>

GitHub が少しだけ使いやすくなる Chrome 拡張です。
今のところ 10 と少しの機能を提供しています。

## インストール

* Chrome ウェブストア (近日公開)

## 機能

1. リキッドデザイン
2. 空白の無視
3. タブ幅の変更
4. コミットログの展開
5. 省略記号 (…) の除去
6. ローカルタイム表示
7. 全コメントの表示/非表示
8. WIP のマージ禁止
9. Close ボタンを左寄せ
10. 素早く引用
11. diff/patch ファイル

### 1. リキッドデザイン

#### Before

![Liquid Design before](image/1_Liquid_Design_before.png)

#### After

![Liquid Design after](image/1_Liquid_Design_after.png)

GitHub サイトにリキッドデザインを適用します。
ページコンテンツがウィンドウ幅まで広がります。

### 2. 空白の無視

#### Before

![Ignore Whitespaces before](image/2_Ignore_Whitespaces_before.png)

#### After

![Ignore Whitespaces after](image/2_Ignore_Whitespaces_after.png)

ファイル変更などで差分を見るときに空白を無視します。
`Show spaces` をチェックすると一時的に空白の差分が表示されます。

### 3. タブ幅の変更

#### Before

![Change Tab Size before](image/3_Change_Tab_Size_before.png)

#### After

![Change Tab Size after](image/3_Change_Tab_Size_after.png)

読みやすくするためソースコードのタブ幅をデフォルトの `8` から `4` に変更します。

### 4. コミットログの展開

#### Before

![Expand Commit Messages before](image/4_Expand_Commit_Messages_before.png)

#### After

![Expand Commit Messages after](image/4_Expand_Commit_Messages_after.png)

デフォルトで折り畳まれて表示されるコミットログを全て展開します。

### 5. 省略記号 (…) の除去

#### Before

![Remove Ellipsis… before](image/5_Remove_Ellipsis…_before.png)

#### After

![Remove Ellipsis… after](image/5_Remove_Ellipsis…_after.png)

コミットログのタイトル (1行目) が長い場合に省略されないように、
省略記号 (`…`) を除去して分割されたタイトルを結合して表示します。

### 6. ローカルタイム表示

#### Before

![No Relative Time before](image/6_No_Relative_Time_before.png)

#### After

![No Relative Time after](image/6_No_Relative_Time_after.png)

相対的なコミット日時 (例：`2 hours ago`, `5 days ago`) をローカルタイム (例：`Jan 17, 2017`) で表示します。
ローカルタイムの日時文字列をホバーすると相対的な日時がポップアップ表示されます。

### 7. 全コメントの表示/非表示

#### "Show all outdated" ボタン

![Show All Comments](image/7_Show_All_Comments.png)

#### "Hide all outdated" ボタン

![Hide All Comments](image/7_Hide_All_Comments.png)

PR の全レビューコメントを一括で表示/非表示にするボタンがテキストボックス下に配置されます。

### 8. WIP のマージ禁止

![Do Not Merge WIP](image/8_Do_Not_Merge_WIP.png)

PR タイトルに以下のキーワードが含まれていると `Merge pull request` ボタンが無効になります。

* `WIP` (Work In Progress)
* `DNM` (Do Not Merge)

※ 大文字小文字は区別されるため `wip` や `dnm` はキーワード対象外です。

### 9. Close ボタンを左寄せ

![Close Button to Left](image/9_Close_Button_to_Left.png)

押し間違えを防ぐために PR / Issue ページ最下部の `Close` ボタンを左寄せにします。

### 10. 素早く引用

![Quick Quoting](image/10_Quick_Quoting.png)

文字列を範囲選択して `Insert a quote` ボタンを押すと、
その文字列が引用された状態でテキストボックスに挿入されます。

※ 文字列を範囲選択して `r` (reply) キーを押したときと同じ挙動になります。

### 11. diff/patch ファイル

PR ページのサイドバーに PR の変更内容を `DIFF` / `PATCH` 形式で表示するリンクが追加されます。

## フィードバック

* [Issues](/rockwillj/githubplus/issues) (日本語 OK)
* [Pull Requests](/rockwillj/githubplus/pulls) (日本語 OK)

## Copyright & License

Copyright © 2017 Josuke Iwata (@rockwillj).

This software is released under the MIT License, see [LICENSE](LICENSE).
