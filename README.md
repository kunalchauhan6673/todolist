**To-do list website is made of three files which are index.html, style.css and script.js. I will be breaking down the elements in each file that I have used below:**

 **index.html**
This is the main HTML file that structures the To-Do List application. It includes the following:

1). Linking external CSS and JavaScript files:
* The file links to the style.css file for styling the application.
* The file links to the script.js file for JavaScript functionality.
2). HTML structure:
  * The file contains a div with the class container that holds the entire application.
  * Inside the container, there is a div with the class todo-app that contains the actual To-Do List elements.
* The todo-app div includes:
 * A heading <h2> with an image (images/list.gif).
 * A div with the class row that contains an input field (input-box) and an "Add" button.
 * A div with the id tasks that displays the count of pending tasks.
 * An unordered list (<ul>) with the id list-container that holds the individual task items.
 * At the bottom, there is a <p> element with a link to the my LinkedIn profile.

**style.css**

1). Universal selector (*):
* Resets the margins, paddings, and sets the font family and box-sizing for all elements.
2). .container:
* Styles the outer container div, setting its width, minimum height, background color/image, and padding.
3). .todo-app:
* Styles the inner div that contains the To-Do List elements, setting its width, maximum width, background color, margin, padding, and border-radius.
* By using flexible units (e.g., %, max-width, vh) and layout techniques (e.g., flex), the application adapts its layout and appearance to different screen sizes and devices, providing a consistent user experience across various platforms.
4). .todo-app h2:
* Styles the heading, aligning it horizontally and vertically, and adding some spacing below it.
5). .row:
* Styles the div that contains the input field and the "Add" button, setting its display, alignment, background color, border-radius, padding, and margin.
6). input:
* Styles the input field, removing borders and outlines, setting the background to transparent, and adjusting the padding, font weight, and font size.
7). button:
* Styles the "Add" button, setting its appearance (border, outline, padding, background color, text color, font size, cursor, and border-radius) and hover effect.
8). ul li:
* Styles the list items (<li>) inside the listContainer, removing the default list style, setting the font size, padding, user-select behavior, cursor, and position.
9). ul li::before:
* Adds a custom checkbox icon before each list item using the ::before pseudo-element, positioning it and setting its size, border-radius, and background image.
10). ul li.checked:
* Styles the list items with the checked class, changing their text color and adding a line-through decoration.
11). ul li.checked::before:
* Changes the background image of the checkbox icon for checked list items.
12). ul li span:
* Styles the "cross" (<span>) element inside each list item, positioning it, setting its size, font size, color, line height (for vertical centering), text alignment, and border-radius.
13). ul li span:hover:
* Adds a hover effect to the "cross" element, changing its background color.
14). p:
* Styles the paragraph element at the bottom, setting its font size, font weight, margin, text alignment, and color.
15). #linkedin:
* Styles the link to the developer's LinkedIn profile, setting its color and removing the underline decoration.
16). #linkedin:hover:
* Adds a hover effect to the LinkedIn link, changing its color.
  
**script.js**
1). Variable declarations:
* inputBox: A reference to the input field where the user enters new tasks.
* listContainer: A reference to the unordered list (<ul>) where the tasks are displayed.
* countValue: A reference to the <span> element that displays the count of pending tasks.
2). addTask() function:
* This function is called when the "Add" button is clicked.
* It checks if the input field is empty. If it is, it alerts the user to enter a task.
* If the input field is not empty, it creates a new list item (<li>) with the task text and appends it to the listContainer.
* It also adds a "cross" (\u00d7) element as a child of the new list item, which serves as the remove button.
* After adding the task, it clears the input field, saves the data to the browser's local storage using the saveData() function, and updates the pending task count using the updatePendingTasks() function.
3). Event listener for clicking on list items or the "cross" element:
* This event listener is attached to the listContainer.
* If the clicked element is a list item (<li>), it toggles the checked class on that element, which visually indicates whether the task is completed or not.
* If the clicked element is the "cross" (<span>), it removes the parent list item (<li>) from the listContainer.
* After either of these actions, it saves the data to the browser's local storage using the saveData() function and updates the pending task count using the updatePendingTasks() function.
4). saveData() function:
* This function saves the current state of the listContainer (the HTML content of the <ul>) to the browser's local storage using localStorage.setItem().
5). showTask() function:
* This function retrieves the saved data from the browser's local storage using localStorage.getItem() and sets the HTML content of the listContainer to that data.
* It also updates the pending task count by calling the updatePendingTasks() function.
6). updatePendingTasks() function:
* This function calculates the number of pending tasks (list items without the checked class) using querySelectorAll().
* It sets the text content of the countValue element to the count of pending tasks.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*How These Files Have Made the Webpage Dynamic and Responsive:*

* The To-Do List application is dynamic and responsive, thanks to the use of files like index.html, script.js, and style.css. The script.js file dynamically manipulates the webpage's content, allowing users to add, complete, or delete tasks. The saveData() and showTask() functions use local storage to preserve task data, ensuring a seamless experience. The updatePendingTasks() function updates the count of pending tasks in real-time.
* The style.css file provides responsive design, adapting to different screen sizes and devices. By using flexible units (e.g., %, max-width, vh) and layout techniques (e.g., flex), the application adapts its layout and appearance to different screen sizes and devices, providing a consistent user experience across various platforms.
* The JavaScript code in script.js handles user interactions, ensuring a dynamic while the stylesheet ensures a responsive user experience.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*Modifications that I would be doing in this project in the future:* 
1. I would like to incorporate functionality allowing users to modify tasks after they've been added to the list.
2. Implementing a feature to display the date and time when each task was initially entered would enhance the user experience.
3. Introducing a dedicated section to showcase all completed tasks separately would improve organization and visibility.
4. Providing an option to download the task list in either Word or PDF format would offer users greater flexibility and convenience.
