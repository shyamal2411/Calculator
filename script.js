const switchbtn = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.getElementById("input");

let value = "";
switchbtn.addEventListener("click", () => {
    if (switchbtn.checked == true) {
        document.setAttribute("data-theme", "dark");
    } else { document.setAttribute("data-theme", "") }
});

input.forEach((e) => {
    e.addEventListener("click", (event) => {
        if (event.target.value == "=") {
            if (value.length != 0) {
                let newval = eval(value);
                value = newval;
                display.value = value;
            }
        } else if (event.target.value == 'C') {
            value = "";
            display.value = value;
        } else if (event.target.value == "switch") {
        } else {
            value += event.target.value;
            display.value = value;
        }
        if(!event.target.classList.contains("switch")){
            event.target.classList.remove("active");
            setTimeout(()=>{
                event.target.classList.remove("active");
            },400);
        }
    });
});