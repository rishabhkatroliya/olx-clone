const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());


const mongoURI = 'mongodb://localhost:27017/olx-classified';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
  price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

router.get('/product/browse', async (req, res) => {
    try {
      const { category, sortBy, search } = req.query;
      let query = {};
  
      if (category) {
        query.category = category;
      }
  
      if (search) {
        query.name = { $regex: search, $options: 'i' };
      }
  
      let sort = {};
      if (sortBy === 'dateNew') {
        sort = { postedAt: -1 };
      } else if (sortBy === 'dateOld') {
        sort = { postedAt: 1 };
      }
  
      const pro = await Product.find(query).sort(sort);
      res.status(200).json(pro);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product', error });
    }
  });


router.post('/product/browse', async (req, res) => {
  try {
    const { name, description, category, image, location, price } = req.body;
    const prod = new Product({
      name,
      description,
      category,
      image,
      location,
      price,
    });
    const save = await prod.save();
    res.status(201).json(save);
  } catch (error) {
    res.status(500).json({ message: 'Error posting the product', error });
  }
});

router.delete('/product/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Product.findByIdAndDelete(id);
    res.status(200).json(del);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the product', error });
  }
});


const port = process.env.PORT || 8080;
// const port = 8081;
app.listen(port, () => console.log('Hello'));

