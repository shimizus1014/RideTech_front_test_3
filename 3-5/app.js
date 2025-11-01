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
function addTodo(event){
    event.preventDefault();
    if(input.value){
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.textContent = input.value;
        button.textContent = "削除";
        button.classList.add("removeButton");
        li.appendChild(button);
        list.appendChild(li);

        input.value = "";
    }
}

function removeTodo(event){
    if(event.target.classList.contains("removeButton")){
        li = event.target.closest("li");
        li.remove();
    }
}

form.addEventListener("submit",addTodo);
list.addEventListener("click",removeTodo);

// メモ：ユーザー入力の挿入は textContent を使う（innerHTML は使わない：XSS回避）
/*
今回はtextContentを使用している
理由としては、innerHTMLでも同様の動作は可能だが、ユーザ入力によってHTMLタグの攻撃(XSS)の危険があるため
*/
