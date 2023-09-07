 //change theme
 const themeToggler = document.querySelector(".theme-toggler");
 themeToggler.addEventListener('click', () => {
     themeToggler.classList.toggle("theme-toggler-on");
     document.body.classList.toggle('dark-theme-variables');

     themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
     themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

     if (localStorage.getItem("theme") == "light") {
         localStorage.setItem("theme", "dark");
     }
     else {
         localStorage.setItem("theme", "light");
     }
 })


 if (localStorage.getItem("theme") == "light") {
     themeToggler.classList.remove("theme-toggler-on");
     document.body.classList.remove("dark-theme-variables");
 }
 else if (localStorage.getItem("theme") == "dark") {
     themeToggler.classList.add("theme-toggler-on");
     document.body.classList.add("dark-theme-variables");
 }
 else {
     localStorage.setItem("theme", "light");
 }  