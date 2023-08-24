
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const sidebar = document.getElementById("sidebar");
    const layer = document.getElementById("layer");
    const containerSidebar = document.querySelector("#container-sidebar");
    const navbarNav = document.querySelector('#navbarNav');

    navbarToggler.addEventListener("click", function() {
        sidebar.classList.add("active");
        layer.classList.add("active");
        containerSidebar.classList.remove("none");
        navbarNav.classList.add("none");
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const layer = document.getElementById("layer");
    const containerSidebar = document.querySelector("#container-sidebar");
    const navbarNav = document.querySelector('#navbarNav');
    const exit = document.querySelector('#exit');

    exit.addEventListener("click", function () {
        sidebar.classList.remove("active");
        layer.classList.remove("active");
        containerSidebar.classList.add("none");
    });
})
