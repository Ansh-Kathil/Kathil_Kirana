console.log("working")
let isClickedOnce = false;
document.querySelector(".third img").addEventListener("click", e=>{

    if(!isClickedOnce){
        document.querySelector(".list").style.display = "flex";

        isClickedOnce = true;
    }
    else{
        document.querySelector(".list").style.display = "none";
        isClickedOnce = false;
    }
})
document.querySelector(".clicker").children[0].addEventListener("click", e=>{
    document.querySelectorAll(".kicker")[0].style.background="#fe9126"
    document.querySelectorAll(".kicker")[1].style.background="green"
    document.querySelectorAll(".kicker")[2].style.background="green"

})
document.querySelector(".clicker").children[1].addEventListener("click", e=>{
    document.querySelectorAll(".kicker")[0].style.background="green"
    document.querySelectorAll(".kicker")[1].style.background="#fe9126"
    document.querySelectorAll(".kicker")[2].style.background="green"

})
document.querySelector(".clicker").children[2].addEventListener("click", e=>{
    document.querySelectorAll(".kicker")[0].style.background="green"
    document.querySelectorAll(".kicker")[1].style.background="green"
    document.querySelectorAll(".kicker")[2].style.background="#fe9126"

})




