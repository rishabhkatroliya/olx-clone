import React from 'react';
import AllRoutes from '../AllRoutes/AllRoutes';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
     <div>
       <Link to="/post"> <button>Post Classified</button></Link>
        <Link to="/browse"> <button>Browse Classified</button></Link>
        <AllRoutes />
     </div>
  );
};

export default Home;
