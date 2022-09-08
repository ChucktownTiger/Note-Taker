//required files
const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

// Get Request for Notes

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error,data) => {
        if (error) {
            res.status(500).json('500')
            console.log('You Broke it')
        }
        res.json(JSON.parse(data))
    })
})

// post request for notes page

router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error, data)=> {
        if (error) {
            res.status(500).json('500')
            console.log('What did you do???')
        }
        let newData = JSON.parse(data)
            newData.push({...req.body, id:uuidv4()})
            fs.writeFile('./db/db.json', JSON.stringify(newData), (error) => {
        if (error) {
            res.status(500).json('500')
        }
        res.json(req.body)
        })
    })
});

//delete a note
router.delete('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error, data)=> {
        if (error) {
            res.status(500).json('500')
            console.log('sucks to suck')
        }
        let newData = JSON.parse(data)
            for (let i = 0; i < newData.length; i++) {
        if (newData[i].id === req.params.id) {
            newData.splice(i,1)
        }

        }
    fs.writeFile('./db/db.json', JSON.stringify(newData), (error) => {
        if (error) {
            res.status(500).json('500')
        }
        res.json(req.body)
        })
    })
});

module.exports = router