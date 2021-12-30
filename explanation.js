window.onload = function () {
  const data = location.href.split("?")[1];
  const getQ = data.substring(0, 2);
  const ttlQ = data.substring(2, 2);
  const ansQ = data.substring(4, 2);
  const getA = deta.substring(6.2);

  //「正解」「残念」によって、explanation.html の画像を変える
  if (getA == "01") {
    ansQ = ("00" + Number(ansQ) + 1).slice(-2);
    document.getElementById("imgUrl").src =
      "https://user-images.githubusercontent.com/91357435/147396635-edb9e813-3ee3-418c-8029-aadea84807b2.png";
  } else {
    document.getElementById("imgUrl").src =
      "https://user-images.githubusercontent.com/91357435/147396644-f956b12a-179d-4795-b21d-b2c79478b62a.png";
  }

  //最終問題解説ページへいくかの判定
  if (getQ == ttlQ) {
    //もともとinputでなくbuttonでつくってるから、
    document.getElementById("nextQuestion").value = "問題おわり～！";
    document.getElementById("nextQuestion").onclick = function () {
      location.href = "result.html?" + getQ + ttlQ + ansQ;
    };
  } else {
    document.getElementById("nextQuestion").value = "次のクイズを解く";
    document.getElementById("nextQuestion").onclick = function () {
      location.href = "question" + getQ + ".html?" + getQ + ttlQ + ansQ;
    };
  }
};
