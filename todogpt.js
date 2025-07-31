// Selecting the relevant elements
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let taskInput = document.querySelector("#task-input");
let dateInput = document.querySelector("#date-input");

// Event listener to handle adding a task
btn.addEventListener("click", function() {
    let task = taskInput.value;
    let selectedDate = dateInput.value;

    // If task is empty, alert the user
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // If no date is selected, use the current date as a fallback
    let taskDate = selectedDate ? new Date(selectedDate) : new Date();
    
    // Format the date in a readable format
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = taskDate.toLocaleDateString('en-US', options);

    // Directly append the task and date to the ul
    ul.innerHTML += `<li>${task} - <span class="date">${formattedDate}</span> <button class="delete">Delete</button></li>`;

    // Clear the input fields
    taskInput.value = "";
    dateInput.value = "";
});

// Event listener to handle deleting a task
ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();  // Remove the task
    }
});
