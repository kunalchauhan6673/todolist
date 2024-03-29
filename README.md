The To-Do List website consists of three main files: index.html, style.css, and script.js. Below, I'll provide a breakdown of the elements and functionalities present in each file.

**index.html**:

This file serves as the main HTML structure for the To-Do List application. It includes:


1. External File Linking:
* Links to style.css for styling the application.
* Links to script.js for JavaScript functionality.

  
2. HTML Structure:

* Contains a div with the class "container" that encompasses the entire application.
* Inside the container:
  * A div with the class "todo-app" holding the To-Do List elements.
* Elements within "todo-app" include:
  * A heading with an image (images/list.gif).
  * A div with the class "row" containing an input field (input-box) and an "Add" button.
  * A div with the id "tasks" displaying the count of pending tasks.
  * An unordered list with the id "list-container" holding individual task items.
  * At the bottom, there's a para element with a link to my LinkedIn profile.

----------------------------------------------------------------------------------------------------------------------------------
**style.css**:

This file contains the styles for the To-Do List application. Key elements include:
* Universal selector (*) resets margins, paddings, and sets font family and box-sizing for all elements.
* .container styles the outer container div with width, minimum height, background, and padding.
* .todo-app styles the inner div containing To-Do List elements with width, maximum width, background, margin, padding, and border-radius.
* .todo-app h2 styles the heading, aligning it and adding spacing below.
* .row styles the div containing input field and "Add" button with display, alignment, background, border-radius, padding, and margin.
* input styles the input field, removing borders and outlines, setting background to transparent, and adjusting padding, font weight, and font size.
* button styles the "Add" button with appearance, hover effect, and other properties.
* ul li styles list items inside the listContainer, adjusting font size, padding, user-select behavior, cursor, and position.
* ul li::before adds a custom checkbox icon before each list item, positioning it and setting size, border-radius, and background image.
* ul li.checked styles checked list items, changing text color and adding line-through decoration.
* ul li.checked::before changes the background image of the checkbox icon for checked items.
* ul li span styles the "cross" element inside each list item, positioning, setting size, font size, color, line height, text alignment, and border-radius.
* ul li span:hover adds a hover effect to the "cross" element, changing its background color.
* p styles the paragraph element at the bottom with font size, font weight, margin, text alignment, and color.
* #linkedin styles the link to the developer's LinkedIn profile, setting its color and removing underline decoration.
* #linkedin:hover adds a hover effect to the LinkedIn link, changing its color.

----------------------------------------------------------------------------------------------------------------------------------  
**script.js:**

This JavaScript file provides functionality for the To-Do List. It includes:

1. Variable Declarations:
* Declarations for various elements used in the script.
  
2. Functions:

* addTask(): Adds tasks to the list.
* Event listeners for interacting with tasks (e.g., marking as completed, deleting).
* saveData(): Saves task data to local storage.
* showTask(): Retrieves saved data from local storage.
* updatePendingTasks(): Updates the count of pending tasks.
  

----------------------------------------------------------------------------------------------------------------------------------
*How These Files Have Made the Webpage Dynamic and Responsive:*

* The To-Do List application is dynamic and responsive, thanks to the use of files like index.html, script.js, and style.css. The script.js file dynamically manipulates the webpage's content, allowing users to add, complete, or delete tasks. The saveData() and showTask() functions use local storage to preserve task data, ensuring a seamless experience. The updatePendingTasks() function updates the count of pending tasks in real-time.
* The style.css file provides responsive design, adapting to different screen sizes and devices. By using flexible units (e.g., %, max-width, vh) and layout techniques (e.g., flex), the application adapts its layout and appearance to different screen sizes and devices, providing a consistent user experience across various platforms.
* The JavaScript code in script.js handles user interactions, ensuring a dynamic while the stylesheet ensures a responsive user experience.
----------------------------------------------------------------------------------------------------------------------------------
*Modifications that I would be doing in this project in the future:* 
1. I would like to incorporate functionality allowing users to modify tasks after they've been added to the list.
2. Implementing a feature to display the date and time when each task was initially entered would enhance the user experience.
3. Introducing a dedicated section to showcase all completed tasks separately would improve organization and visibility.
4. Providing an option to download the task list in either Word or PDF format would offer users greater flexibility and convenience.
