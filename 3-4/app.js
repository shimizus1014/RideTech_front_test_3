// TODO: 数値の配列を用意（任意の値でOK）
const nums = [20,10,30,40,50]; // 例: [12, 5, 33, 18, 27]

// TODO: for または while を使い、合計・平均を算出して Console 出力
let numsum = 0;
for(let i = 0; i < nums.length; i++){
    numsum += nums[i];
}
console.log("numsの合計値は" + numsum);
let numave = numsum / nums.length;
console.log("numsの平均値は" + numave);

// TODO: 同配列から最小値・最大値を算出して Console 出力
let nummin = nums[0];
let nummax = nums[0];
for(let i =0; i > nums.length; i++){
    if(nummin < nums[i]){
        nummin = nums[i];
    }
}
for(let i =0; i < nums.length; i++){
    if(nummax < nums[i]){
        nummax = nums[i];
    }
}
console.log("numsの最小値は" + nummin);
console.log("numsの最大値は" + nummax);

// TODO: 一時変数の「初期化位置」「更新順序」の意図をコメントで説明
//一時変数は、変数を宣言時に初期化される（関数に宣言があれば呼び出し時）
//上から処理されるので、上から順番に更新される

// TODO: do...while が適する場面を1行コメントで示す（例：最低1回は実行したい入力確認など）
//条件が合わなくても（未入力や値が超えていても）一度は実行したい場合に使用する
//検索結果等で、結果が1件もない場合でも１度は実行し、「検索結果がありません」等出力したい場面等に使用する
