function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector(".navbar_list").classList.toggle("navbar_list_hidden")
}
function tabsFunction(event) {
    if (event.target.classList.contains("tab_text")) {
        document.querySelector(".checkout_show").classList.remove("checkout_show")
        document.getElementById(event.target.textContent.replace(/ /g, '')).classList.add("checkout_show")
        document.querySelector(".active_tab").classList.remove("active_tab")
        event.target.parentElement.classList.add("active_tab")
    }
    if (event.target.classList.contains("tab")) {
        document.querySelector(".checkout_show").classList.remove("checkout_show")
        document.getElementById(event.target.children[0].textContent.replace(/ /g, '')).classList.add("checkout_show")
        document.querySelector(".active_tab").classList.remove("active_tab")
        event.target.classList.add("active_tab")
    }
}
if(window.screen.width <= 480) {
    document.querySelector(".explore_links_list").style.display = "none"
    document.querySelector(".explore_links_list1").style.display = "none"
    document.querySelector(".contact_list").style.display = "none"
}

function explore() {
    if (
        document.querySelector(".explore_links_list").style.display == "none" &&
        document.querySelector(".explore_links_list1").style.display == "none"
    ) {
        document.querySelector(".explore_links_list").style.display = "block"
        document.querySelector(".explore_links_list1").style.display = "block"
        document.querySelector(".footer_logo_block").style.marginBottom = "10px"
    }
    else {
        document.querySelector(".explore_links_list").style.display = "none"
        document.querySelector(".explore_links_list1").style.display = "none"
    }
}
function contact(event) {
    event.target.nextElementSibling.classList.toggle("contact_show")
}