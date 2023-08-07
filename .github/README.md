# FormValidator
- HTML/CSS/Javascriptを勉強するため、[vanillawebprojects](https://vanillawebprojects.com/)にあるサイトを模写しました。
- 各入力欄に正しい文字列が入っているか確認します。
## デモ
![FormValidator](https://github.com/sksk000/FormValidator/assets/137740372/bb244b83-9da1-4631-9a2a-5ebc8386e114)

## Github Pages URL
以下のURLにアクセスすると実装物を確認することができます。
- https://sksk000.github.io/FormValidator/

### 模倣したサイト
https://vanillawebprojects.com/projects/form-validator/

## 実装機能
- 入力欄に記述されている文字列が正しいかどうか確認する機能
- Submitを押すと入力欄に入力されている文字が正しいか確認します。
  - UserName
    - 3文字以上になっているか確認しています。
  - Email
    - 正規表現を利用してEmailアドレスが正しいかどうか確認しています。
  - Password
    - 6文字以上になっているかどうか確認しています。
  - Confirm Password
    - Passwordで入力した文字列と同じか確認しています。

## 使用言語とライブラリ
### 言語
- Javascript
- HTML
- CSS

### ライブラリ
- bootstrap var5.3.0
