import express from 'express';

const app = express()
app.get('/', (req, res) => {
    console.log('oi')
    return res.json([
        {id: 1, nome: 'oi'},
        {id: 2, nome: 'oi1'},
        {id: 3, nome: 'oi2'}
    ])
})

app.listen(3000)