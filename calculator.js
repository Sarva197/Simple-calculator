let dispscreen = document.getElementById("inputbtn");
let num = document.querySelectorAll(".numbtn");
let clr = document.querySelectorAll("#clear");
let string = "";

Array.from(num).forEach((num) =>{
    num.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            dispscreen.value = string;
        }
        else{
        string += e.target.innerHTML;
        dispscreen.value = string;
        }
    });
});

Array.from(num).forEach((number) =>{
number.addEventListener("click",(c)=>{
let val = c.target.innerText;
if(val === "C"){
    string = "";
    dispscreen.value = "0";
}
if(val == "+"){
    
}
})
});

console.log(Math.random()*2);