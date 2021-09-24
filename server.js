
const express = require('express')
const app = express();
const port = 3000;    // app.listen(3000);
const db = require("./db/items");

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(302).send('Hello World!\n');
})

app.get('/items',  (req, res) => {
    db.getAllItems()
      .then(db => {
        res.status(200).json(db);
      })
})

app.get('/search/item/:id', (req, res) => {
  db.getSpecificItem(req.params.id)
   .then(item => {
     if(item){
    res.status(200).json(item)
     }
  })
})

app.get('/delete/item/:id', (req, res) => {
      db.deleteItem(req.params.id)
      .then( test => {
        if(test){
          res.status(200).json({message: "succesfully removed"});
        }
      })
})

app.get('/add/:name/:price/:year/:condition/:description', (req, res) => {
    const name = req.params.name;
    const price = req.params.price;
    const year = req.params.year;
    const condition = req.params.condition;
    const description = req.params.description;
    db.addItem(name, price, year, condition, description)
    .then( test => {
      if(test){
        res.status(200).json({message: "succesfully added"});
      }
    })
})

app.get('/update/item/:id/:name', (req, res) => {
  db.updateItemName(req.params.id, req.params.name)
  .then( item => {
    if( item ){
      res.status(200).json({message: "succesfully updated"});
    }
  })
})


app.listen(port, () => {
  console.log(`Example server listening at http://localhost:${port}`)
})

// END OF FILE

