const QRCode = require('qrcode');

const QrGenerate = async text => {
    try {
        const qr  = await QRCode.toFile(`./qrcode/${new Date()}.png`, text)
    } catch (error) {
        console.log(error)
    }
}

// QrGenerate('https://www.credib.io/')
QrGenerate('https://purplelinen.vercel.app')
// https://purplelinen.vercel.app
