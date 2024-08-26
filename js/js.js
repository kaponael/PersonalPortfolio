class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="mynav">
        <div class="nav-item"><a href="homepage.html">.homepage</a></div>
        <div class="nav-item"><a href="aboutme.html">.aboutme</a></div>
        <div class="nav-logo"><a href="javascript:void(0);">
            <svg width="95.5" height="43.5" viewBox="0 0 191 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M96.7205 69V17.7305H63.0876V28.2236H84.6892V38.0332H64.4548V48.5264H84.6892V58.5068H62.7458V69H96.7205Z" fill="white"/>
                <path d="M91.5872 69H79.5559V17.7305H91.5872V41.041C92.7037 39.4232 93.7633 37.9193 94.7659 36.5293C95.7913 35.1165 96.6571 33.9772 97.3635 33.1113L109.566 17.7305H123.75L104.883 41.417L127.271 69H111.719L97.1926 51.0898L91.5872 58.165V69Z" fill="white"/>
            </svg></a>
        </div>
        <div class="nav-item"><a href="portfolio.html">.portfolio</a></div>
        <div class="nav-item"><a href="contactme.html">.contactme</a></div>
        <div><a href="javascript:void(0);" class="icon" onclick="myNavFunction()">
            <i class="fa fa-bars" style="color: #D1DDED"></i>
          </a></div>
        </nav>`
        ;
    }
}

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'content/EleniKaponaCV.pdf';
    link.download = 'EleniKaponaCV.pdf';
    link.click();
}

function myNavFunction() {
    document.getElementById("mynav").classList.toggle("responsive");
}

customElements.define('portfolio-navbar', Navbar);
