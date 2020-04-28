const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'DaNang,VietNam'
    })
})


// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('server is up on port 3000')
})

