// Function to create a new to-do item
function createTodoItem(taskText) {
    // Create a new list item
    const li = document.createElement('li');

    // Create a checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; // Set type to checkbox
    checkbox.className = 'checkbox'; // Add class for styling

    // Create a span to hold the task text
    const text = document.createElement('span');
    text.textContent = taskText; // Set the text content

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'; // Set button text
    deleteButton.className = 'deleteButton'; // Add class for styling

    // Append checkbox, text, and delete button to the list item
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);

    // Event handler for checkbox change
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            text.classList.add('completed'); // Add completed class
            document.getElementById('todoList').appendChild(li); // Move item to the end
        } else {
            text.classList.remove('completed'); // Remove completed class
            document.getElementById('todoList').insertBefore(li, document.getElementById('todoList').firstChild); // Move item to the top
        }
    });

    // Event handler for delete button click
    deleteButton.addEventListener('click', () => {
        li.remove(); // Remove the list item from the list
    });

    return li; // Return the created list item
}

// Add event listener to the "Add" button
document.getElementById('addButton').addEventListener('click', () => {
    // Get the input value
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim(); // Trim whitespace from the input value

    // Check if the input is not empty
    if (taskText) {
        // Create a new to-do item and append it to the list
        const newItem = createTodoItem(taskText);
        document.getElementById('todoList').appendChild(newItem);
        input.value = ''; // Clear the input field
    }
});

// Add event listener to allow pressing Enter to add a task
document.getElementById('todoInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') { // Check if Enter key is pressed
        document.getElementById('addButton').click(); // Trigger click event on "Add" button
    }
});

