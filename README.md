# JavaScript記号変換
[JS記号プログラミング入門](https://qiita.com/acid_chicken/items/eeb0b42a1ecbba0c49e3)に感銘を受けたので作成

## 使い方

以下のコマンドで記号コードに自動変換

```node index.js -c {変換するファイルのパス} -o {出力先ファイルパス}```


## 記号プログラミングとは？

自動でJavaScriptのコードを記号だけで動くコードへ変換する。

キーボードが
- メリット
  - キーボードのアルファベットが全部が打てなくなってもプログラミングが可能

- デメリット
  - 可読性が劇的に下がる
  - パフォーマンスが下がる
  - ファイルサイズが大きくなる

詳細は以下のページ  
[JS記号プログラミング入門](https://qiita.com/acid_chicken/items/eeb0b42a1ecbba0c49e3)

Input:
```javascript:input
console.log('Hello HELL.')
```

Output:
```javascript:output
_=[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]([][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+(![]+[])[+[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+(!![]+[])[-~-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~-~[]+-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+(![]+[])[+[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+([]+{})[-~-~-~-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~[]+(!![]+[])[-~-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+([]+{})[-~-~-~-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+(![]+[])[+[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+-~-~-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~[]+-~-~-~-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~[]+-~-~-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~[]+-~-~-~-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+([]+{})[-~-~-~-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+([]+{})[-~-~-~-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~-~-~[]+(![]+[])[+[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~[]+-[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~[]+-~-~-~-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~[]+-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~[]+([]+{})[-~-~-~-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~-~-~[]+([]+{})[-~-~-~-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~[]+-~-~-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-~-~[]+-~-~-~-~-~-~-~-~-~[]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-[]+([][[]]+[])[-~-~[]]+(/"/+[])[-~[]])()+[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]((!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+(/"/+[])[-~[]]+(/\\/+[])[-~[]]+([][[]]+[])[+[]]+-[]+-[]+-[]+(![]+[])[-~[]]+(/"/+[])[-~[]])())()
```

## コードを編集する場合

npmインストール

```npm install```

watch起動

```npm run watch```
