document.addEventListener("DOMContentLoaded", () => { 
    // Menu Dropdown
    const menuButton = document.querySelector(".menu-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (menuButton && dropdownMenu) {
        menuButton.addEventListener("click", () => {
            dropdownMenu.classList.toggle("open");
        });
    }

    // Header Image Animation
    const headerImage = document.querySelector(".header-image");

    if (headerImage) {
        setTimeout(() => {
            headerImage.style.opacity = "1";
            headerImage.style.transform = "translateY(0)";
        }, 500);
    }

    // Section Scroll Animation
    const sections = document.querySelectorAll(".section");

    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "0px 0px -50px 0px",
            threshold: 0.1
        });

        sections.forEach(section => observer.observe(section));
    }

    // Scroll-to-Top Button
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    if (scrollToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        });

        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
