# なやみん

匿名で気軽に悩みを相談できるWebアプリ

## 主な機能

- 新規登録・ログイン・ログアウトができる
- 悩みを投稿する
- 悩みを投稿するときに「悩み度」を10段階でつけることができる
- 悩みに対して解決案などをコメントする
- 悩みに対して「わかる」「ドンマイ」というリアクションができる
- リアクションの上位3つのランキングが表示できる

## 今後実装したい機能

- Azure Cognitive Services の Text Analytics を使った文書のネガポジ判定を用いた誹謗中傷コメントなどの制限
- タグ機能
- タグの絞り込み機能

## メンバー

- @citrus-candy：モックデザインの作成、Firebaseの実装・連携、Nuxt3の調査・実装
- @Simo-C3：デザインの実装
- @pikake：デザインの実装

## 開発技術

- Firebase
- Nuxt 3
- TailwindCSS

## 感想

### Nuxt 3 について
技術点としての評価や最新の技術に触れてみたいという思いがあり、今回はNuxt 3を採用しました。
かなり最近の技術なので技術記事が少なく、今までのNuxtとの互換性を探すことに苦労しました。
一部ネットの記事にもない技術があったので、自前で実装したりしました。
使ってみた感想として、VuexがcomposablesやuseStateになってよりコンパクトになったことや、Viteを使用しての高速なホットリロードが実現できていたことがあり、使い方を理解することが大変だったが慣れると簡単でした。
また、Vue、Nuxtつよつよのメンターさんにサポートしていただいたおかげで実現できた機能もありました。この場を借りて感謝します。
ただ、Nuxt3は今回初めて触ったため、本当に実装できるのか不安だったこともありました。計画性の点からみて、新しい技術は容易に手を出すべきではないと感じたのが今回の反省点です。
by @citrus-candy

### tailwindを触ってみて
久々にフロントを触ったので、cssや要素の構成を考えるのに時間が掛かったり、コーディングに時間が掛かったりしました。ただ、tailwindを今回使用していたこともあり、割と楽に簡単に実装できたかなと思います。記述量を省けたりすることは良かったんですが、用意されていないCSSの記述があったりして、そこの解決策を考えるのが大変でした。
前回のハッカソンでバックエンドにはまって以来、フロントを触れる機会がなかったのですが、フロントエンドのデータの扱い方などを学べたので、バックエンドの実装などにも生かそうと思いました。また、今回の使用技術がNuxt3、TypeScriptで、今まで振れたことが無かったので、メソッド関連の実装には参加できませんでした。それが悔しいので、その辺のことを普段の開発で学んでいきたいと思った。
最後に、今回初参加の一回生の江本さんがこのハッカソンを通して、すごい成長していたので、やっぱりハッカソンはいいなと思いました。
by @Simo-C3

### 人生初ハッカソンに参加してみて
今回、プログラミングつよつよの先輩方に誘われて、人生初のハッカソンに参加させていただきました。プログラミングについて勉強し始めたのは今年大学に入ってからなので、技術は全くありません。そんな中、今回対面でチーム開発をすることが出来てとてもよい経験となりました。CSSとHTMLくらいしか扱えない私ですが、今回初めてTailwindを使用しました。最初は調べながらコードを書いていましたが、慣れるととても簡単にCSSが書けるので感動しました。また、GitHubを使っての開発にもまだ慣れていなかったのでよい練習になりました。
今回のハッカソンは先輩方にものすごく手を貸していただきながらの練習参加のようなものだったので、もっと成長してメンバーの役に立てるように技術を付けたいです。先輩方のおかげで今回無事に終了することが出来たので、とても楽しみながらチーム開発をすることが出来ました。難しいコードを書きまくる先輩たちがとてもかっこよかったのでわたしもかっこよくなりたいです。参加して本当に良かったです。
by @pikake
