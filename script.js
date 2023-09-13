const qrcodeContainer = document.getElementById('imgBox');
const downloadButton = document.getElementById('downloadButton');


function generateQRCode() {
    const qrText = document.getElementById('qrText').value;

    if (qrText.trim() === '') {
        alert('Please enter a Name or URL');
        return;
    }

    qrcodeContainer.innerHTML = '';
    const qrcode = new QRCode(qrcodeContainer, {
        text: qrText,
        width: 150,
        height: 150,
        colorDark: '#0000FF',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.H,
    });

   
    downloadButton.style.display = 'block';

}

function downloadQR() {
    const qrText = document.getElementById('qrText').value;
    if (qrcodeContainer.innerHTML) {
        const qrCodeDataURL = qrcodeContainer.querySelector('img').src;
        const downloadLink = document.createElement('a');
        downloadLink.href = qrCodeDataURL;
        downloadLink.download = "qrcode"+qrText+".png";
        downloadLink.click();
    }
}
