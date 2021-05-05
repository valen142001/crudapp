const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then (() => {
    console.log("Mongo Connected to Database")
})
.catch(err => { 
    console.log("Mongo Error in Connecting")
    console.log(err)
})

//const p = new Product({
   // name: 'Ruby Grapefruit',
   // price: '1.99',
  //  category: 'fruit'
//})
//p.save()
 // .then(p => {
   //   console.log(p)
  //})
  //.catch(e => {
    //  console.log(e)
 // })

 const seedProducts = [
     {
        name: 'Eggplant',
         price: '1.19',
        category: 'vegetable'
     },
     {
        name: ' Melon',
         price: '3.00',
        category: 'fruit'
     },
     {
        name: 'Watermelon',
         price: '5.89',
        category: 'fruit'
     },
     {
        name: 'Milk',
         price: '2.09',
        category: 'dairy'
     }
 ]

 Product.insertMany(seedProducts)
 .then(res => {
     console.log(res)
 })
 .catch(e => {
     console.log(e)
 })