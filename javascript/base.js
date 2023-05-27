var menu_open = false;
var hamburger_img = document.getElementById("menu_toggle_img");
var menu = document.querySelector(".mobile_dropdown_menu");

function hamburger_toggle()
{ 
    if (menu_open == true)
    {
        menu_open = false
        hamburger_img.src = "..\\assets\\icons\\hamburger_menu.png"
        menu.classList.remove("show_menu")
    }
    else
    {
        menu_open = true
        hamburger_img.src = "..\\assets\\icons\\close_menu.png"
        menu.classList.add("show_menu")
    }
}


/* var window_size = window.matchMedia("(max-width: 600px)")
var desktop_nav = document.querySelector(".desktop_nav")

function mobile_on(window_size) {
    if (window_size.matches)
    {
       
    }
    else 
    {
        
    }
  }

mobile_on(window_size)
window_size.addListener(mobile_on) */