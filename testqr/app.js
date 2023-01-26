const QRCode = require('qrcode');

const QrGenerate = async text => {
    try {
        const qr  = await QRCode.toFile(`./qrcode/${new Date()}.png`, text)
    } catch (error) {
        console.log(error)
    }
}

// QrGenerate('https://www.credib.io/')
QrGenerate('https://play.google.com/store/apps/details?id=io.credib.mobileapp')
// https://purplelinen.vercel.app
