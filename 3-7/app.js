const toasts = document.getElementById('toasts');
const addBtn = document.getElementById('add');

// TODO: createToast(message, ttl) を実装
// - .toast 要素を生成（innerHTML または要素組み立て）
// - 「閉じる」ボタン（.close）を含める
// - コンテナに append
// - 自動閉タイマー（ttl ms 後に hideToast）を設定

// TODO: hideToast(el) を実装
// - 既に閉じていれば何もしない
// - .hide を付けて退場アニメ開始
// - transitionend / animationend 後に el.remove()
// - 自動閉タイマーがあればクリア

// TODO: 「通知を追加」クリックで createToast を呼ぶ
// addBtn.addEventListener('click', () => createToast('通知メッセージ', 3000));

// TODO: イベントデリゲーション
// - 親 #toasts に1つだけ click リスナーを付け、event.target が .close ならそのトーストを閉じる

// メモ：preventDefault / stopPropagation は不要（必要ならコメントで理由記載）。
