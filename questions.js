window.onload = function(){

const data = location.href.split("?")[1];
const getQ = data.substring(0,2);
// const ttlQ = data.substring(2,2);
// const ansQ = data.substring(4,2); 

document.getElementById("ans_ok".onclick) = function(){
    location.href = "explamnation" + getQ + ".html?" + data + "01";
}
document.getElementById("ans_ng1".onclick) = function(){
    location.href = "explamnation" + getQ + ".html?" + data + "02";
}
document.getElementById("ans_ng2".onclick) = function(){
    location.href = "explamnation" + getQ + ".html?" + data + "02";
    }
}



