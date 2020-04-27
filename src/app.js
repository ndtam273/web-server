const express = require('express')

const app = express()

app.get('', ( req, res ) => {
    res.send('<h1>Weather</h1>')
} )

app.get('/help', (req, res) => {
   res.send({
       name: 'Andrew',
       age: 27
   })
})

app.get('/about', (req, res) => {
    res.send('<h1>About us</h1>')
})

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

