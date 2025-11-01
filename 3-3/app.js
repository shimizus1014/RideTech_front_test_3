// TODO: 数値 score を受け取り、'合格' / '追試' / '不合格' を返す関数 judgeIf(score) を作成
// 条件：80以上→合格、50〜79→追試、それ以外→不合格
function judgeIf(score){
    if(score >= 80){
        console.log("合格");
    }else if(score >= 50){
        console.log("追試");
    }else{
        console.log("不合格");
    }
}

// TODO: 上と同じ判定を行う judgeSwitch(score) を作成（switch を用いる）
function judgeSwitch(score){
    switch(true){
        case score >= 80:
            console.log("合格");
            break;
        case score >= 50:
            console.log("追試");
            break;
        case score >= 0:
            console.log("不合格");
            break;
    }
}
// TODO: 複数の score をテストし、両者の戻り値を Console 出力
judgeIf(80);
judgeIf(50);
judgeIf(40);

judgeSwitch(80);
judgeSwitch(50);
judgeSwitch(40);

// TODO: 「範囲条件には if、固定値マッチには switch が向く」等、読みやすさの観点をコメントで述べる
/*
●●以上、以下には基本的にif文が向いている。
特定の値を引数で受け取って一致する値に条件分岐したい場合はswitch文が向いている。
また、範囲条件についてtrueを使用することでswichi文でも代用できるが、
else文を使用するif文の方が、条件が見やすいコードになる
*/