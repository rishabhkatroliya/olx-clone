// components/App.js (or any other entry point of your application)
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import BrowseClassified from '../Components/BrowseClassified';
import ClassifiedForm from '../Components/ClassifiedForm';
import Home from '../Components/Home';

const AllRoutes = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/browse" element={<BrowseClassified />} />
          <Route exact path="/post" element={<ClassifiedForm />} />
      </Routes>
      </>
  );
};

export default AllRoutes;
