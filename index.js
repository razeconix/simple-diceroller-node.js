const express = require('express')
const app = express()

app.use(express.static('static'))

// Routes

app.get('/white', (req, res) => {
    const html = ('<img src="/images/white1.png">')    
    res.send(html)
} )

//แบบต้องกำหนดค่า num 
app.get('/black', (req, res) => {
    const num = req.query.num 
    const html = '<img src="/images/black'+num+'.png">'
        res.send(html)
 } )
//แบบไม่ต้้องกำหนดค่า num = 1 
app.get('/blacks', (req, res) => {
    var num = req.query.num 
    num = num == null? 1:num
    const html = '<img src="/images/black'+num+'.png">'
        res.send(html)
 } )

app.get('/dice', (req, res) => {
    const num = req.query.num 
    const col = req.query.col
    var color = col 
    if(col == 'w'){
            color = 'white'    

    }else if(col == 'b'){

            color = 'black'
    }
    const html = '<img src="/images/'+color+''+num+'.png">'
             
    res.send(html)
 } )

 app.get('/random', (req, res) => {
    const num = Math.floor(Math.random()*6)+1 
    const col = Math.floor(Math.random()*2)+1 
    var color = col 
    if(col == '1'){
            color = 'white'    

    }else if(col == '2'){

            color = 'black'
    }
    const html = '<img src="/images/'+color+''+num+'.png"><br><a href="/random">Again</a>'
             
    res.send(html)
 } )
 

// Start the web server on port 3000
app.listen(3000, () =>
console.log('Web server listening on port 3000'))