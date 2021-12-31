//正解数を集計

function onClickCorrect(number) {
  location.href = "explanation" + number + ".html";
  const point = localStorage.getItem("point")? parseInt(localStorage.getItem("point")): 0;
  localStorage.setItem("point", "0");
}