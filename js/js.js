// const path = window.location.pathname;
//   if (path === "/homepage.html") window.location.replace("/");
//   if (path === "/aboutme.html") window.location.replace("/aboutme");
//   if (path === "/portfolio.html") window.location.replace("/portfolio");
//   if (path === "/contactme.html") window.location.replace("/contactme");

  class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
       <nav id="mynav">
    <div class="top-row">
        <div class="nav-logo">
            <a href="/">
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

    <div class="nav-item"><a href="/">.homepage</a></div>
    <div class="nav-item"><a href="/aboutme">.aboutme</a></div>
    <div class="nav-logo desktop-logo">
        <a href="/">
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
    <div class="nav-item"><a href="/portfolio">.portfolio</a></div>
    <div class="nav-item"><a href="/contactme">.contactme</a></div>
</nav>
`;

      const navLinks = this.querySelectorAll("a");
      const currentPath = window.location.pathname;

      navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if ((currentPath === "/" && linkPath === "/") || currentPath === linkPath) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  customElements.define('portfolio-navbar', Navbar);

  function myNavFunction(el) {
    const nav = document.getElementById("mynav");
    nav.classList.toggle("responsive");
    el.classList.toggle("open");
  }

// function openPDFInNewTab() {
//   const link = document.createElement('a');
//   link.href = 'content/Eleni_Kapona_Resume.pdf';
//   link.target = '_blank';
//   link.click()
// }
