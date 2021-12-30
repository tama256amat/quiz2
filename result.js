window.onload = function () {
  const data = location.href.split("?")[1];
  const getQ = data.substring(0, 2);
  const ttlQ = data.substring(2, 2);
  const ansQ = data.substring(4, 2);
  const result = Number(ansQ);

  //正解数を集計

  document.getElementById("total").innerHTML = result; //これで0でも点数が入る？
};

//ふみなさんがつくってくれたもの
// function onClickCorrect() {
//   location.href = "explanation.html";
//   const point = localStorage.getItem("point")
//     ? parseInt(localStorage.getItem("point"))
//     : 0;
//   localStorage.setItem("point", point + 1);
// }
