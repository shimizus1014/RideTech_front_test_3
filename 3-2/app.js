// TODO: let / const を使い分けて、以下を各1つずつ宣言
// 数値 / 文字列 / 真偽値 / null / undefined / 配列 / オブジェクト
let num = 10;
let str = "test";
let boo = true;
let nul = null;
let und = undefined;
const array = [10,20,30];
const human = {
    name : "sou",
    age : 27
};
// TODO: 実行前に「予想される型」をコメントで書く

// TODO: typeof（配列は Array.isArray も）で実測結果を Console 出力
//number
console.log(typeof num);
//string
console.log(typeof str);
//boolean
console.log(typeof boo);
//object
console.log(typeof nul);
//undefined
console.log(typeof und);
//true
console.log(Array.isArray(array));
//object
console.log(typeof human);

// TODO: const で宣言したオブジェクトの『プロパティ変更』を行い、
//      変更できる理由（再代入とプロパティ変更の違い）をコメントで説明
human.age = 30;
console.log(human.age);
/*
const で宣言したオブジェクトでは、参照メモリを指定（保持？）していて、それに対しての再代入はできないが、
参照したメモリからみたオブジェクトの中のプロパティ自体は変更可能（オブジェクト自体が変わるわけではないから）
*/
