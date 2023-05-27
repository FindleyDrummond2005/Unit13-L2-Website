var window_size = window.matchMedia("(max-width: 600px)")
var nav_option = document.querySelector(".nav_option")

function mobile_on(window_size) {
    if (window_size.matches)
    {
        alert("gamer")
        nav_option.classlist. ("nav_option");
    }
    else 
    {
        alert("game")
    }
  }

mobile_on(window_size)
window_size.addListener(mobile_on)