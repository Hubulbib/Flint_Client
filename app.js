const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 80

const app = express()

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`))