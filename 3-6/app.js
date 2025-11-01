const root = document.getElementById('modal-root');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const overlay = document.querySelector(".overlay");

// TODO: openModal / closeModal 関数を実装
// - 開く: is-open 付与、aria-hidden=false、初期フォーカス move（任意）
// - 閉じる: is-open 削除、aria-hidden=true、トリガーへフォーカスを戻す
function openModel(){
    root.classList.add("is-open");
    root.setAttribute("aria-hidden" , "false");
}

function closeModal(event){
    if(event.key === "Escape" || event.target.id === "close" || event.target.className == "overlay"){
        root.classList.remove("is-open");
        root.setAttribute("aria-hidden" , "true");
        openBtn.focus();
    }
}

openBtn.addEventListener("click" , openModel);

closeBtn.addEventListener("click" , closeModal);
overlay.addEventListener("click" , closeModal);
document.addEventListener("keydown" , closeModal);

// TODO: クリック/キーイベント登録
// - #open クリックで開く
// - #close クリック、overlay クリック、Esc キーで閉じる

// メモ：今回は preventDefault / stopPropagation は不要（必要ならコメントで理由を述べる）
/*
何かを送信したりページ遷移する処理があるわけではないため、preventDefalt/stopPropagationは不要
*/
