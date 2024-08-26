function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'content/EleniKaponaCV.pdf';
    link.download = 'EleniKaponaCV.pdf';
    link.click();
}

function myNavFunction() {
    document.getElementById("mynav").classList.toggle("responsive");
}
