var pickerBtn = document.getElementById("color-picker-btn");
var hexValue=document.getElementById("hex-value");
pickerBtn.addEventListener("click", function () {
    var value = document.querySelector("#head").value;
    document.body.style.backgroundColor = `${value}`;
    hexValue.textContent=value;

})