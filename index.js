let button = document.querySelectorAll(".digit");
for (i of button){
    i.addEventListener("click", function(){
        })
}

let output = document.querySelector(".display");
for (i of button){
    i.addEventListener("click", function(){
output.value += this.getAttribute("data-value");
    })
}

let remove = document.getElementById("#clear");
remove.addEventListener("click", function(){
   output.value=""; 
})


let answer = document.getElementById("#equal");
answer.addEventListener("click", function(){
    output.value = eval(output.value);
    
})