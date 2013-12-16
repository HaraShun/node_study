補足情報
================

一通りNode.jsの使い方を学んだところで、ここからは実際の開発が少し楽になるTipsです。

### Node.jsのデバック

クライアントサイドのデバックについては、Chromeなどにバンドルされている開発者ツールを利用することが一般的だと思います。
Node.jsのサーバサイドのデバックについては、[node-inspector](https://github.com/node-inspector/node-inspector)を使います。

まずはnode-inspectorをセットアップします。

````
npm install -g node-inspector
````

まずnode-inspectorを起動させておきます。
````
node-inspector &
````

別のターミナルにてNodeアプリケーションを起動します。このとき **--debug** オプションをつけます。
````
node --debug app.js
````

Chromeで以下のURLにアクセスすると、開発者ツールが表示されクライアントサイドのデバックと同じ感覚でサーバサイドのデバックを行うことができます。

````
http://127.0.0.1:8080/debug?port=5858
````

### コード変更時のプロセス再実行

コードを修正するたびにNodeのプロセスを再実行することは非常に面倒です。ここは[nodemon](https://github.com/remy/nodemon)を使って自動で再実行するようにしましょう。

まずはnodemonをセットアップします。
````
npm install -g nodemon
````

Nodeアプリを起動する際に、nodemonを経由して起動させるようにします。
````
nodemon add.js
````

デバックしたい場合は、 **--debug** オプションを付ければnode-inspectorにてデバックできます。
````
nodemon --debug add.js
````

### エディタ

エディタをお持ちでない方は、以下のサービスを使ってはいかがでしょうか。

- [Cloud9](https://c9.io/)


### Paas

Nodeがさくっと動かせるPaas

- [nodejitsu](https://www.nodejitsu.com/)
- [Windows Azure](http://www.windowsazure.com/ja-jp/)


