const root = document.getElementById('modal-root');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

// TODO: openModal / closeModal 関数を実装
// - 開く: is-open 付与、aria-hidden=false、初期フォーカス move（任意）
// - 閉じる: is-open 削除、aria-hidden=true、トリガーへフォーカスを戻す

// TODO: クリック/キーイベント登録
// - #open クリックで開く
// - #close クリック、overlay クリック、Esc キーで閉じる

// メモ：今回は preventDefault / stopPropagation は不要（必要ならコメントで理由を述べる）
