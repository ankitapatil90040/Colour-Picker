var btn = document.getElementById("click-btn");

btn.addEventListener("click", function listen() {
    var value1 = parseInt(document.querySelector("#inputId1").value);
    var value2 = parseInt(document.querySelector("#inputId2").value);
    var value3 = parseInt(document.querySelector("#inputId3").value);
    console.log("clicked");
    document.body.style.backgroundColor = `rgb(${value1},${value2},${value3})`;
})