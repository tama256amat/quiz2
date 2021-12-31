//

//「正解」「残念」によって、explanation.html の画像を変える

// let changeImg = document.getElementById("imgurl");
// changeImg.src =
//   "https://user-images.githubusercontent.com/91357435/147396635-edb9e813-3ee3-418c-8029-aadea84807b2.png";
// function judgeImg(changeImg) {

//ねこせいかい
// let answer = "true"
// if (true) {https://user-images.githubusercontent.com/91357435/147396635-edb9e813-3ee3-418c-8029-aadea84807b2.png

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

//正解数を集計

function onClickCorrect() {
  location.href = "explanation.html";
  const point = localStorage.getItem("point")
    ? parseInt(localStorage.getItem("point"))
    : 0;
  localStorage.setItem("point", point + 1);
}

// 最終問題解説ページからresult.html へ 。クリックしたら正解数出るようにしたいけど。。。
document.getElementById("load").addEventListener("click", () => {
  location.href = "result.html";
});

//result.html の点数の場所に反映
function askForResult() {
  const total = sessionStorage.getItem("point");
}
