require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send(
    ({
        Name : 'Nasir Zia',
        Gmail : 'nasirzia@gmail.com'


    })
  )
})

app.get('/gmail' ,( req ,res ) => {
  res.send( {
    Gmail : `The email is already in your account'`,

  })
}
)


app.listen(process.env.PORT ,  () => {
  console.log(`Example app listening on port ${port}`)
})