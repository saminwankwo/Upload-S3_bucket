const QRLogo = require('qr-with-logo');

const QrGenerate = async data => {
    try {
        const qr = QRLogo.generateQRWithLogo(data, "logo.png", {}, "PNG", "qrlogo.png") 
    } catch (error) {
        console.log(error)
    }
}
// const data = JSON.stringify({name: "Zacharie Happel",
//               job:  "Student/Intern", 
//               grade: "Senior"
// })

// QRLogo.generateQRWithLogo(data, "logo.png", {}, "PNG", "qrlogo.png") 
QrGenerate('https://www.credib.io/')
