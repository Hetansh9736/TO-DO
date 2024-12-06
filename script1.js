document.addEventListener("DOMContentLoaded", function() {
    const inputbox = document.getElementById("input");
    const listcontainer = document.getElementById("list-container");

    function addtask() {
        if (inputbox.value === '') {
            alert("You have to write something");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputbox.value;

            let span = document.createElement("span");
            let button = document.createElement("button");
            button.className = "delete";
            button.textContent = "Delete";

            // Attach the delete functionality
            button.onclick = function() {
                li.remove();
            };

            // Add the button to the span and span to the li
            span.appendChild(button);
            li.appendChild(span);

            // Append the li to the list container
            listcontainer.appendChild(li);
        }
        inputbox.value = ""; // Clear the input box
    }
});
