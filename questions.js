/* <article>
    <div id="quiz">
        <h1>第<span id="qid"></span>問</h1>
        <p id="question"></p>
    </div>
    <div id="answer">
        <a id="answer_a" class="button button_a"><span>A</span><span id="answer_a_text"></span></a>
        <a id="answer_b" class="button button_b"><span>B</span><span id="answer_b_text"></span></a>
        <a id="answer_c" class="button button_c"><span>C</span><span id="answer_c_text"></span></a>
        <div id="result">
            <div id="she_correct" class="she_box">
                <img class="she_illust" src="images/she_illust_correct.png" />
                <img class="text" src="images/text_correct.png" />
            </div>
            <div id="she_incorrect" class="she_box">
                <div class="left">
                    <p class="t1">正解は</p><p id="she_incorrect_alphabet"></p>
                </div>
                <div class="right">
                    <img class="she_illust" src="images/she_illust_incorrect.png" />
                </div>
                <img class="text" src="images/text_incorrect.png" />
            </div>
            <a id="goto_exp" href="#" class="button">解説へ</a>
        </div>
    </div>

    <div id="explanation">
        <div class="box">
            <h1>解説</h1>
            <div id="exp_body"></div>
        </div>
        <a id="goto_next" href="#" class="button">次の問題へ</a>
    </div>


</article>
    //  */

const answerList = document.querySelectorAll("div.button-container div");

//「正解」「残念」によって、explanation.html の画像を変える

let changeImg = document.getElementById("id");
changeImg.src =
  "https://user-images.githubusercontent.com/91357435/147396635-edb9e813-3ee3-418c-8029-aadea84807b2.png";
// function judgeImg(changeImg) {

//ねこせいかい
// let answer = "true"
// if (true) {

//     }
//   //ねこざんねん
//     else {
//         changeImg.src ="https://user-images.githubusercontent.com/91357435/147396644-f956b12a-179d-4795-b21d-b2c79478b62a.png";
//   }
// }
// const answersList = document.querySelectorAll  button-container
// function checkKlickedanswer(){

//     解答のリンク先は同じ
//     //ボタンによって答えを判定 ページに遷移
//     let explanationPageLink;

// }

// //正解数を集計--> resultpageに反映

// let getanswer = document.getElementById('answer_a');

//  function showquiz(quiz){

//  }

//  // 問題、ボタンは5ページ分つくることにする！最期ページ判定もいらない
// class Quiz{
//     constructor()
// }
//     {
//         question: "寒いですね。あなたは風邪を引いたことはありますか？さて、風邪のときにすることで間違っているものはどれでしょう。?",
//         answers: {
//         a: "Superman",
//         b: "The Terminator",

//         c: "Waluigi, obviously"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "What is the best site ever created?",
//         answers: {
//         a: "SitePoint",
//         b: "Simple Steps Code",
//         c: "Trick question; they're both the best"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Where is Waldo really?",
//         answers: {
//         a: "Antarctica",
//         b: "Exploring the Pacific Ocean",
//         c: "Sitting in a tree",
//         d: "Minding his own business, so stop asking"
//         },
//         correctAnswer: "d"
//     }
//     ];
