function addtask() {
    const inputbox = document.getElementById("input");
    const listcontainer = document.getElementById("list-container");
    const data = localStorage.getItem("list");

    if (inputbox.value === '') {
        alert("You have to write somthing");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        let button = document.createElement("button");
        button.className = "delete";
        button.textContent = "Delete";
        button.onclick = function () {
            li.remove();
        };

        span.appendChild(button);
        li.appendChild(span);
        listcontainer.appendChild(li);
        if (data) {
            const formattedData = JSON.parse(data);
            console.log(formattedData, "asdas")
            localStorage.setItem("list", JSON.stringify([...formattedData, inputbox.value]))
        } else {
            localStorage.setItem("list", JSON.stringify([inputbox.value]))
        }
    }
    inputbox.value = "";
}


document.addEventListener(("DOMContentLoaded"), () => {
    const listcontainer = document.getElementById("list-container");
    const list = localStorage.getItem("list")
    let data = JSON.parse(list)
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = data[i];
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        let button = document.createElement("button");
        button.className = "delete";
        button.textContent = "Delete";
        button.onclick = function () {
            li.remove();
        };

        span.appendChild(button);
        li.appendChild(span);
        listcontainer.appendChild(li);

    }
})




