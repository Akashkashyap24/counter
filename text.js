const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const clear = document.getElementById("clear");
var ans = document.getElementById("ans");

let count = 0;

inc.addEventListener("click", () => {
    if (count >= 0) {
        count++;
        ans.innerHTML = count;
        const error=document.getElementById("error").style.visibility="hidden";
        clear.removeAttribute('disabled');
    }
});
dec.addEventListener("click", () => {
    if (count>0) {
        count--;
        ans.innerHTML = count;
    }
    else{
       
        const error=document.getElementById("error").style.visibility="visible";
        clear.setAttribute("disabled", "");
    }
});
clear.addEventListener("click",()=>{
    ans.innerHTML=0;

});