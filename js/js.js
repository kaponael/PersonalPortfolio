class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<nav id="mynav">
    <div class="top-row">
        <div class="nav-logo">
            <a href="homepage.html">
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 52" width="66" height="52">
                    <title>logo</title>
                    <style>
                        .s0 { fill: #ffffff } 
                    </style>
                    <path class="s0" d="m35.7 52v-51.3h-33.6v10.5h21.6v9.8h-20.2v10.5h20.2v10h-22v10.5z"/>
                    <path class="s0" d="m30.6 52h-12v-51.3h12v23.3q1.7-2.4 3.2-4.5 1.5-2.1 2.6-3.4l12.2-15.4h14.1l-18.8 23.7 22.4 27.6h-15.6l-14.5-17.9-5.6 7.1z"/>
                </svg>
            </a>
        </div>
        <div class="hamburger" onclick="myNavFunction(this)">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <div class="nav-item"><a href="homepage.html">.homepage</a></div>
    <div class="nav-item"><a href="aboutme.html">.aboutme</a></div>
    <div class="nav-logo desktop-logo">
        <a href="homepage.html">
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 52" width="66" height="52">
                <title>logo</title>
                <style>
                    .s0 { fill: #ffffff } 
                </style>
                <path class="s0" d="m35.7 52v-51.3h-33.6v10.5h21.6v9.8h-20.2v10.5h20.2v10h-22v10.5z"/>
                <path class="s0" d="m30.6 52h-12v-51.3h12v23.3q1.7-2.4 3.2-4.5 1.5-2.1 2.6-3.4l12.2-15.4h14.1l-18.8 23.7 22.4 27.6h-15.6l-14.5-17.9-5.6 7.1z"/>
            </svg>
        </a>
    </div>
    <div class="nav-item"><a href="portfolio.html">.portfolio</a></div>
    <div class="nav-item"><a href="contactme.html">.contactme</a></div>
</nav>
`;
    }
}

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'content/Eleni_Kapona_Resume.pdf';
    link.download = 'Eleni_Kapona_Resume.pdf';
    link.click();
}

function myNavFunction(el) {
    const nav = document.getElementById("mynav");
    nav.classList.toggle("responsive");
    el.classList.toggle("open");
}

customElements.define('portfolio-navbar', Navbar);

document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav .nav-item a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");

        if (currentPath.includes(href)) {
            link.classList.add("active");
        }
    });
});
