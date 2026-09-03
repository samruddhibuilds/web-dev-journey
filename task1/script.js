const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-links a");

// Navbar color change on scroll

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

    // Active menu according to section

    let current = "";

    document.querySelectorAll("section").forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});