// TODO: 要素の取得（form / input / list）
const form = document.getElementById('form');
const input = document.getElementById('todoInput');
const list = document.getElementById('list');

// TODO: フォーム送信時の処理
// 1) 送信を止める（preventDefault）
// 2) 入力値を取り出し、空文字なら何もしない
// 3) li と 削除ボタン を createElement で作成
// 4) li を list の末尾へ append（appendChild でも可）
// 5) 削除ボタンクリックで当該 li を remove
// 6) 入力欄をクリア

// メモ：ユーザー入力の挿入は textContent を使う（innerHTML は使わない：XSS回避）
