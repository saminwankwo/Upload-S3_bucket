const express = require('express')
const path = require('path');

const multer  = require('multer')
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const { uploadFile, getFileStream } = require('./s3')

const upload = multer({ dest: 'uploads/' })


const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('index');
})

app.post('/images', upload.single('image'), async (req, res) => {
    const file = req.file
    console.log(file)

    
    // console.log(multer.upload)
    console.log("slowly")
    console.log(req.body)
    console.log("result");

    const result = await uploadFile(file)
    await unlinkFile(file.path)
    console.log(result)


    console.log('file details')
    // const file = req.file
    console.log(file)
})

// app.post('/images', upload.single('image'), async (req, res) => {
//     const file = req.file
//     console.log(file)
  
//     // apply filter
//     // resize 
  
    // const result = await uploadFile(file)
    // await unlinkFile(file.path)
    // console.log(result)
//     const description = req.body.description
//     res.send({imagePath: `/images/${result.Key}`})
//   })

app.listen(8080, () => console.log("listening on port 8080"))
