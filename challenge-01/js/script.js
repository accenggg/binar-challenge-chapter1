
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const sidebar = document.getElementById("sidebar");
    const layer = document.getElementById("layer");
    const containerSidebar = document.querySelector("#container-sidebar");
    const navbarNav = document.querySelector('#navbarNav');

    navbarToggler.addEventListener("click", function() {
        sidebar.classList.toggle("active");
        layer.classList.toggle("active");
        containerSidebar.classList.remove("none");
        navbarNav.classList.toggle("none");
    });
});
