let output = document.querySelector(".result");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            output.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "0";
            output.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            output.value = string;
        }
        else {
            string += e.target.innerHTML;
            output.value = string;
        }
        console.log(string);
        output.innerHTML = string
    })
})