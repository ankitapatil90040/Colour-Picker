var hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var color=document.querySelector(".span");
var btn=document.querySelector("#click-btn");
var intervalBtn=document.querySelector("#interval-btn");
var stopBtn=document.querySelector("#stop-btn");
var interval;
intervalBtn.addEventListener("click",function()
{
   
  interval=setInterval(listen,3000);
})
stopBtn.addEventListener("click",function stopfunction()
{
    clearInterval(interval);
   
});


function listen()
{
    var hexcode="#";
    for(var i=0;i<6;i++)
    {
        hexcode+=hex[getrandomNumber()];
    }
    document.body.style.backgroundColor=hexcode;
    color.innerHTML=hexcode;

}

function getrandomNumber()
{
    return Math.floor(Math.random()*hex.length);
}