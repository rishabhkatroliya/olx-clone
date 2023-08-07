import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postClassifiedAd } from '../Redux/action';

const ClassifiedForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    image: '',
    location: '',
    postedAt: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postClassifiedAd(formData));
    alert("Product Detail is successfully submitted");
    setFormData({
      name: '',
      description: '',
      category: '',
      image: '',
      location: '',
      postedAt: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Other">Other</option>
      </select>
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <input type="date" name="postedAt" value={formData.postedAt} onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClassifiedForm;
