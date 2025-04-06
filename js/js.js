const path = window.location.pathname;
  if (path === "/homepage.html") window.location.replace("/");
  if (path === "/aboutme.html") window.location.replace("/aboutme");
  if (path === "/portfolio.html") window.location.replace("/portfolio");
  if (path === "/contactme.html") window.location.replace("/contactme");

  class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav id="mynav">
          <div class="top-row">
            <div class="nav-logo">
              <a href="/">
                <!-- logo svg here -->
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
              <!-- logo svg here -->
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

  function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'content/Eleni_Kapona_Resume.pdf';
    link.download = 'Eleni_Kapona_Resume.pdf';
    link.click();
  }