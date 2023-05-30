var menu_open = false;
var hamburger_img = document.getElementById("menu_toggle_img");
var menu = document.querySelector(".mobile_dropdown_menu");

function hamburger_toggle() /* Toggles the hamburger menu in the mobile view */
{ 
    if (menu_open == true)
    {
        menu_open = false
        hamburger_img.src = "..\\assets\\Icons\\hamburger_menu_icon.png"
        menu.classList.remove("show_menu")
    }
    else
    {
        menu_open = true
        hamburger_img.src = "..\\assets\\Icons\\close_menu_icon.png" 
        menu.classList.add("show_menu")
    }
}
    