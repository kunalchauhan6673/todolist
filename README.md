Introduction:
The To-Do List website consists of three main files: index.html, style.css, and script.js. Below, I'll provide a breakdown of the elements and functionalities present in each file.

**index.html**:
This file serves as the main HTML structure for the To-Do List application. It includes:

1. External File Linking:

Links to style.css for styling the application.
Links to script.js for JavaScript functionality.
2. HTML Structure:

Contains a div with the class "container" that encompasses the entire application.
Inside the container:
A div with the class "todo-app" holding the To-Do List elements.
Elements within "todo-app" include:
A heading <h2> with an image (images/list.gif).
A div with the class "row" containing an input field (input-box) and an "Add" button.
A div with the id "tasks" displaying the count of pending tasks.
An unordered list (<ul>) with the id "list-container" holding individual task items.
At the bottom, there's a <p> element with a link to the my LinkedIn profile.

**style.css**:
This file contains the styles for the To-Do List application. Key elements include:

1. Universal Selector (*):

Resets margins, paddings, sets font family, and box-sizing for all elements.

2.Specific Class and ID Styling:

Styles the "container" and "todo-app" divs for layout and appearance.
Formats headings, input fields, buttons, list items, etc., with specific classes and IDs.

3.Responsive Design:

Utilizes flexible units and layout techniques to ensure responsiveness across different screen sizes and devices.

**script.js:**
This JavaScript file provides functionality for the To-Do List. It includes:

1. Variable Declarations:

Declarations for various elements used in the script.
2. Functions:

* addTask(): Adds tasks to the list.
* Event listeners for interacting with tasks (e.g., marking as completed, deleting).
* saveData(): Saves task data to local storage.
* showTask(): Retrieves saved data from local storage.
* updatePendingTasks(): Updates the count of pending tasks.

-----------------------------------------------------------------------------------------------------------------
 *Dynamic and Responsive Features:*

The website is dynamic, allowing users to add, complete, or delete tasks in real-time.
Responsive design ensures optimal viewing and functionality across different devices and screen sizes.

-----------------------------------------------------------------------------------------------------------------
*Future Modifications:*

1. Incorporate task modification functionality.
2. Display timestamps for task entry.
3. Introduce a section for displaying completed tasks separately.
4. Provide an option to download the task list in Word or PDF format.

