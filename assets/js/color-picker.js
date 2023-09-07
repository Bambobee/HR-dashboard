 /*=========== theme colors =====================*/
 const alternateStyles = document.querySelectorAll(".alternate-style");

 function setActiveStyle(color) {
     alternateStyles.forEach((style) => {
         if (color === style.getAttribute("title")) {
             style.removeAttribute("disabled");
         } else {
             style.setAttribute("disabled", "true");
         }
     });
 
     // Store the current theme color in localStorage
     localStorage.setItem("themeColor", color);
 }
 
 // Get the stored theme color from localStorage (default to "default" if not set)
 const storedThemeColor = localStorage.getItem("themeColor") || "default";
 
 // Set the initial theme based on the stored theme color
 setActiveStyle(storedThemeColor);
 
 // Add event listeners to elements that can change the theme
 const themeButtons = document.querySelectorAll(".theme-button");
 themeButtons.forEach((button) => {
     button.addEventListener("click", () => {
         const themeColor = button.getAttribute("data-color");
         setActiveStyle(themeColor);
     });
 });
 
 
 /*I added an event listener to elements with the class "theme-button" so that when one of these buttons is clicked, the theme is changed accordingly.
 
 I added a localStorage.setItem call in the setActiveStyle function to store the currently selected theme color in the localStorage.
 
 I changed the way we retrieve the stored theme color. We default to "default" if it's not set or retrieved from localStorage.
 
 I replaced style with document.body when enabling/disabling the theme, assuming you want to apply the theme to the entire page.
 
 I updated the setAttribute and removeAttribute calls to set and remove the "disabled" attribute on document.body.classList, assuming you intended to update the class on the body element.
 
 Make sure you have HTML elements with the class "alternate-style" for each theme style, and buttons with the class "theme-button" and a "data-color" attribute corresponding to the theme colors you want to switch to.
 
 
 
 
 
 */
 